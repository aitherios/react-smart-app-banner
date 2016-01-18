import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PureRender from 'pure-render-decorator'

import { BaseStyle } from './stylesheets'

@PureRender
class ViewButton extends Component {

  static propTypes = {
    attributes: React.PropTypes.object,
    text: React.PropTypes.string,
    os: React.PropTypes.oneOf(['android', 'windows', 'ios']).isRequired,
    style: React.PropTypes.object,
  }

  static defaultProps = {
    attributes: {
      android: { href: '#', rel: 'external', title: 'View App' },
      windows: { href: '#', rel: 'external', title: 'View App' },
      ios: { href: '#', rel: 'external', title: 'View App' },
    },
    text: 'View',
  }

  render() {
    return (
      <a
        {... this.props.attributes[this.props.os]}
        style={Object.assign({},
          BaseStyle.viewButton.all,
          BaseStyle.viewButton[this.props.os],
          this.props.style,
        )}
      >
        {this.props.text}
      </a>
    )
  }

}

export default ViewButton
