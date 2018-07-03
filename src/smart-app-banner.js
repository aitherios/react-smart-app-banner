import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MobileDetect from 'mobile-detect'

import CloseButton from './close-button'
import ViewButton from './view-button'
import Header from './header'
import Icon from './icon'
import { BaseStyle } from './stylesheets'

class ReactSmartAppBanner extends Component {
  static propTypes = {
    closeButton: PropTypes.shape({
      attributes: PropTypes.object,
      text: PropTypes.string,
      style: PropTypes.object,
    }),
    icon: PropTypes.shape({
      style: PropTypes.object,
    }),
    header: PropTypes.shape({
      title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
      subtitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
      style: PropTypes.object,
    }),
    viewButton: PropTypes.shape({
      attributes: PropTypes.object,
      text: PropTypes.string,
      style: PropTypes.object,
    }),
    os: PropTypes.oneOf(['android', 'windows', 'ios']),
    allowedOs: PropTypes.arrayOf(PropTypes.string),
    onUpdate: PropTypes.func,
    onClose: PropTypes.func
  }

  static defaultProps = {
    allowedOs: ['android', 'windows', 'ios'],
    onUpdate: () => {},
    onClose: () => {}
  }

  static storageKey = 'react-smart-app-banner_closed_at'

  state = {
    os: this.props.os || 'android',
    hide: this.props.os ? false : true,
  }

  componentDidMount() {
    this.detectOs()
    this.rememberHideState()
  }

  componentDidUpdate() {
    this.props.onUpdate(this.state)
  }

  detectOs() {
    if (window && window.navigator && !this.props.os) {
      let md = new MobileDetect(window.navigator.userAgent)
      this.md = md

      if (md.is('iOS') && md.is('Safari') && md.version('iOS') > 6) {
        this.setState({os: 'ios'}, this.checkAllowedOs)
      } else if (md.is('iOS')) {
        this.setState({os: 'ios', hide: false}, this.checkAllowedOs)
      } else if (md.is('AndroidOS')) {
        this.setState({os: 'android', hide: false}, this.checkAllowedOs)
      } else if (md.is('WindowsPhoneOS')) {
        this.setState({os: 'windows', hide: false}, this.checkAllowedOs)
      }
    }
  }

  rememberHideState() {
    if(window && window.localStorage){
      var lastCloseDate = window.localStorage.getItem(ReactSmartAppBanner.storageKey)
      if(lastCloseDate && (Date.now() - lastCloseDate) < 86400000 * 7) {
        this.setState({ hide: true })
      } else {
        window.localStorage.removeItem(ReactSmartAppBanner.storageKey)
      }
    }
  }

  checkAllowedOs() {
    if (this.props.allowedOs.indexOf(this.state.os) < 0) {
      this.setState({ hide: true })
    }
  }

  close = () => {
    this.setState({ hide: true })

    if(
      window &&
      window.localStorage &&
      !window.localStorage.getItem(ReactSmartAppBanner.storageKey)
    ){
      window.localStorage.setItem(ReactSmartAppBanner.storageKey, Date.now())
    }

    this.props.onClose()
  }

  mergeProps(component) {
    return Object.assign({},
      this.props[component],
      { os: this.state.os }
    )
  }

  render() {
    if (this.state.hide) return false

    return (
      <section style={Object.assign({},
          BaseStyle.smartAppBanner.all,
          BaseStyle.smartAppBanner[this.state.os],
        )}
      >
        <CloseButton {...this.mergeProps('closeButton')} onClick={this.close} />
        <Icon {...this.mergeProps('icon')} />
        <Header {...this.mergeProps('header')} />
        <ViewButton {...this.mergeProps('viewButton')} />
      </section>
    )
  }
}

export default ReactSmartAppBanner
