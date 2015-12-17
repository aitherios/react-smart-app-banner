import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import PureRender from 'pure-render-decorator'

import { BaseStyle } from './stylesheets'

@Radium
@PureRender
class Header extends Component {

  static propTypes = {
    title: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.shape({
        android: React.PropTypes.string,
        windows: React.PropTypes.string,
        ios: React.PropTypes.string,
      }),
    ]),
    subtitle: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.shape({
        android: React.PropTypes.string,
        windows: React.PropTypes.string,
        ios: React.PropTypes.string,
      }),
    ]),
    os: React.PropTypes.oneOf(['android', 'windows', 'ios']).isRequired,
    style: React.PropTypes.object,
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
        style={[
          BaseStyle.header.all,
        ]}
      >
        <h1
          style={[
            BaseStyle.header.all.title,
            BaseStyle.header[this.props.os].title,
            this.props.style,
          ]}
        >
          {this.title()}
        </h1>
        <p
          style={[
            BaseStyle.header.all.subtitle,
            BaseStyle.header[this.props.os].subtitle,
          ]}
        >
          {this.subtitle()}
        </p>
      </header>
    )
  }

}

export default Header
