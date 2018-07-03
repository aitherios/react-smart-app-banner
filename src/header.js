import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { BaseStyle } from './stylesheets'

class Header extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        android: PropTypes.string,
        windows: PropTypes.string,
        ios: PropTypes.string,
      }),
    ]),
    subtitle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        android: PropTypes.string,
        windows: PropTypes.string,
        ios: PropTypes.string,
      }),
    ]),
    os: PropTypes.oneOf(['android', 'windows', 'ios']).isRequired,
    style: PropTypes.object,
  }

  static defaultProps = {
    title: 'App Title',
    subtitle: 'Subtitle',
  }

  title() {
    if(typeof(this.props.title) === 'string') {
      return this.props.title
    } else {
      return this.props.title[this.props.os]
    }
  }

  subtitle() {
    if(typeof(this.props.subtitle) === 'string') {
      return this.props.subtitle
    } else {
      return this.props.subtitle[this.props.os]
    }
  }

  render() {
    return (
      <header
        style={Object.assign({},
          BaseStyle.header.all,
        )}
      >
        <h1
          style={Object.assign({},
            BaseStyle.header.all.title,
            BaseStyle.header[this.props.os].title,
            this.props.style,
          )}
        >
          {this.title()}
        </h1>
        <p
          style={Object.assign({},
            BaseStyle.header.all.subtitle,
            BaseStyle.header[this.props.os].subtitle,
          )}
        >
          {this.subtitle()}
        </p>
      </header>
    )
  }
}

export default Header
