import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import PureRender from 'pure-render-decorator'

import { BaseStyle } from './stylesheets'

@Radium
@PureRender
class Header extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    os: React.PropTypes.oneOf(['android', 'windows', 'ios']).isRequired,
  }

  static defaultProps = {
    title: 'App Title',
    subtitle: 'Subtitle',
  }

  render() {
    return (
      <header
        style={[
          BaseStyle.header.all,
        ]}
      >
        <h1
          style={[BaseStyle.header[this.props.os].title]}
        >
          {this.props.title}
        </h1>
        <p
          style={[BaseStyle.header[this.props.os].subtitle]}
        >
          {this.props.subtitle}
        </p>
      </header>
    )
  }

}

export default Header
