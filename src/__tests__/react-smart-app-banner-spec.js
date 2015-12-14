jest.dontMock('../index')

import React from 'react'
import ReactDOM from 'react-dom'
import { renderToString } from 'react-dom/server'
import TestUtils from 'react-addons-test-utils'

const ReactSmartAppBanner = require('../index')

describe('ReactSmartAppBanner', () => {

  function renderComponent(props){
    return TestUtils.renderIntoDocument(
      <ReactSmartAppBanner {... props}/>
    )
  }

  function serverRenderComponent(props){
    return renderToString(
      <ReactSmartAppBanner {... props}/>
    )
  }

  it('renders', () => {
    var component = renderComponent()
    expect(component).not.toBeFalsy()
  })

  it('renders for android', () => {
    var component = renderComponent({os: "android"})
    expect(component).not.toBeFalsy()
  })

  it('renders for windows', () => {
    var component = renderComponent({os: "windows"})
    expect(component).not.toBeFalsy()
  })

  it('renders for ios', () => {
    var component = renderComponent({os: "ios"})
    expect(component).not.toBeFalsy()
  })

  describe('when rendering in server', () => {

    it('renders', () => {
      var component = serverRenderComponent()
      expect(component).not.toBeFalsy()
    })

  })

})
