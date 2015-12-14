import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import PureRender from 'pure-render-decorator'

import { BaseStyle } from './stylesheets'

@Radium
@PureRender
class ViewButton extends Component {

  static propTypes = {
    attributes: React.PropTypes.object,
    text: React.PropTypes.string,
    os: React.PropTypes.oneOf(['android', 'windows', 'ios']).isRequired,
  }

  static defaultProps = {
    attributes: {
      href: '#',
      rel: 'external',
      title: 'View App',
    },
    text: 'View',
  }

  render() {
    return (
      <a
        {... this.props.attributes}
        style={[
          BaseStyle.viewButton.all,
          BaseStyle.viewButton[this.props.os],
        ]}
      >
        {this.props.text}
      </a>
    )
  }

}

export default ViewButton
