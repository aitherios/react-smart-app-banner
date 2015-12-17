import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import PureRender from 'pure-render-decorator'

import { BaseStyle } from './stylesheets'

@Radium
@PureRender
class Icon extends Component {

  static propTypes = {
    os: React.PropTypes.oneOf(['android', 'windows', 'ios']).isRequired,
    style: React.PropTypes.object,
  }

  static defaultProps = {
    style: {},
  }

  render() {
    return (
      <figure
        style={[
          BaseStyle.icon.all,
          BaseStyle.icon[this.props.os],
          this.props.style.all,
          this.props.style[this.props.os],
        ]}
      />
    )
  }

}

export default Icon
