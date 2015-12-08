import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ReactSmartAppBanner extends Component {

  render() {
    return (
      <span>
        {this.props.message}
      </span>
    )
  }

}

ReactSmartAppBanner.propTypes = {
  message: React.PropTypes.string
}

ReactSmartAppBanner.defaultProps = {
  message: "Hello!"
}

export default ReactSmartAppBanner
