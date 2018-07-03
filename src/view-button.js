import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { BaseStyle } from './stylesheets'

class ViewButton extends Component {
  static propTypes = {
    attributes: PropTypes.object,
    text: PropTypes.string,
    os: PropTypes.oneOf(['android', 'windows', 'ios']).isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    attributes: {
      android: { href: '#', rel: 'external', title: 'View App' },
      windows: { href: '#', rel: 'external', title: 'View App' },
      ios: { href: '#', rel: 'external', title: 'View App' },
    },
    text: 'View',
    onClick: () => {},
  }

  onClickHandler() {
    this.props.onClick(this.props.os)
  }

  render() {
    return (
      <a
        {... this.props.attributes[this.props.os]}
        onClick={::this.onClickHandler}
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
