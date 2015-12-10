import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ReactSmartAppBanner extends Component {

  static propTypes = {
    closeSmartAppBannerAttr: React.PropTypes.object,
    closeSmartAppBannerText: React.PropTypes.string,
    viewAppAttr: React.PropTypes.object,
    viewAppText: React.PropTypes.string,
  }

  static defaultProps = {
    closeSmartAppBannerAttr: {
      href: '#',
      rel: 'icon',
      title: 'Close Smart App Banner',
    },
    closeSmartAppBannerText: 'Close Smart App Banner',
    viewAppAttr: {
      href: '#',
      rel: 'external',
      title: 'View App',
    },
    viewAppText: 'View App',
  }

  render() {
    return (
      <section>
        <a {... this.props.closeSmartAppBannerAttr}>
          {this.props.closeSmartAppBannerText}
        </a>
        <figure />
        <header>
          <h1>Facebook</h1>
          <p>Free - On the App Store</p>
        </header>
        <a {... this.props.viewAppAttr}>
          {this.props.viewAppText}
        </a>
      </section>
    )
  }

}

export default ReactSmartAppBanner
