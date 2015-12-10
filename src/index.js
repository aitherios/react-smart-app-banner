import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ReactSmartAppBanner extends Component {

  static propTypes = {
    message: React.PropTypes.string
  }

  static defaultProps = {
    message: "Hello!"
  }

  render() {
    return (
      <span>
        {this.props.message}
      </span>
    )
  }

}

export default ReactSmartAppBanner
