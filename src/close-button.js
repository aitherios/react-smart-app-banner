import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Radium from 'radium'
import PureRender from 'pure-render-decorator'

import { BaseStyle } from './stylesheets'

@Radium
@PureRender
class CloseButton extends Component {

  static propTypes = {
    attributes: React.PropTypes.object,
    text: React.PropTypes.string,
    os: React.PropTypes.oneOf(['android', 'windows', 'ios']).isRequired,
    svgFor: React.PropTypes.object,
  }

  static defaultProps = {
    attributes: {
      href: '#',
      rel: 'icon',
      title: 'Close Smart App Banner',
    },
    text: 'Close Smart App Banner',
    svgFor: {
      android: {
        viewBox: '-50 -50 270 270',
        fill: '#b1b1b3',
        preserveAspectRatio: "xMidYMid meet",
        path: {
          d: 'M146.537,1.047c-1.396-1.396-3.681-1.396-5.077,0L89.658,52.849c-1.396,1.396-3.681,1.396-5.077,0L32.78,1.047  c-1.396-1.396-3.681-1.396-5.077,0L1.047,27.702c-1.396,1.396-1.396,3.681,0,5.077l51.802,51.802c1.396,1.396,1.396,3.681,0,5.077  L1.047,141.46c-1.396,1.396-1.396,3.681,0,5.077l26.655,26.655c1.396,1.396,3.681,1.396,5.077,0l51.802-51.802  c1.396-1.396,3.681-1.396,5.077,0l51.801,51.801c1.396,1.396,3.681,1.396,5.077,0l26.655-26.655c1.396-1.396,1.396-3.681,0-5.077  l-51.801-51.801c-1.396-1.396-1.396-3.681,0-5.077l51.801-51.801c1.396-1.396,1.396-3.681,0-5.077L146.537,1.047z',
        },
      }
    }
  }

  render() {
    return (
      <a
        {... this.props.attributes}
        style={[
          BaseStyle.closeButton.all,
          BaseStyle.closeButton[this.props.os],
        ]}
      >
        <span>{this.props.text}</span>
        <svg {... this.props.svgFor[this.props.os]}>
          <path {... this.props.svgFor[this.props.os].path}/>
        </svg>
      </a>
    )
  }

}

export default CloseButton
