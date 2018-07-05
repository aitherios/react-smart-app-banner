import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { BaseStyle } from './stylesheets'

class Icon extends Component {
  static propTypes = {
    os: PropTypes.oneOf(['android', 'windows', 'ios']).isRequired,
    style: PropTypes.object,
  }

  static defaultProps = {
    style: {},
  }

  render() {
    return (
      <figure
        style={Object.assign({},
          BaseStyle.icon.all,
          BaseStyle.icon[this.props.os],
          this.props.style.all,
          this.props.style[this.props.os],
        )}
      />
    )
  }
}

export default Icon
