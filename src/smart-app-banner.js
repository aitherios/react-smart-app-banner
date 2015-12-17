import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import PureRender from 'pure-render-decorator'
import MobileDetect from 'mobile-detect'

import CloseButton from './close-button'
import ViewButton from './view-button'
import Header from './header'
import Icon from './icon'
import { BaseStyle } from './stylesheets'

@Radium
@PureRender
class ReactSmartAppBanner extends Component {

  static propTypes = {
    closeButton: React.PropTypes.shape({
      attributes: React.PropTypes.object,
      text: React.PropTypes.string,
      style: React.PropTypes.object,
    }),
    viewButton: React.PropTypes.shape({
      attributes: React.PropTypes.object,
      text: React.PropTypes.string,
    }),
    header: React.PropTypes.shape({
      title: React.PropTypes.string,
      subtitle: React.PropTypes.string,
    }),
    icon: React.PropTypes.object,
    os: React.PropTypes.oneOf(['android', 'windows', 'ios']),
  }

  constructor(props) {
    super(props)
  }

  state = {
    os: this.props.os || 'android',
    hide: this.props.os ? false : true,
  }

  componentDidMount() {
    this.parseDevice()
  }

  parseDevice = () => {
    if (window && window.navigator && !this.props.os) {
      let md = new MobileDetect(window.navigator.userAgent)
      this.md = md

      if (md.is('iOS') && md.is('Safari') && md.version('iOS') > 6) {
        this.setState({os: 'ios'})
      } else if (md.is('iOS')) {
        this.setState({os: 'ios', hide: false})
      } else if (md.is('AndroidOS')) {
        this.setState({os: 'android', hide: false})
      } else if (md.is('WindowsPhoneOS')) {
        this.setState({os: 'windows', hide: false})
      }
    }
  }

  close = () => {
    this.setState({hide: true})
  }

  mergeProps = (component) => {
    let props
    if(component === 'closeButton'){
      props = Object.assign({},
        this.props[component],
        {os: this.state.os, onClick: ::this.close}
      )
    } else {
      props = Object.assign({},
        this.props[component],
        {os: this.state.os}
      )
    }
    return props
  }

  render() {
    if (this.state.hide) { return false }
    return (
      <section style={[
          BaseStyle.smartAppBanner.all,
          BaseStyle.smartAppBanner[this.state.os],
        ]}
      >
        <CloseButton {... this.mergeProps('closeButton')}/>
        <Icon {... this.mergeProps('icon')}/>
        <Header {... this.mergeProps('header')}/>
        <ViewButton {... this.mergeProps('viewButton')}/>
      </section>
    )
  }

}

export default ReactSmartAppBanner
