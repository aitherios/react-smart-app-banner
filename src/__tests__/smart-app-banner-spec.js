jest.dontMock('../smart-app-banner')
jest.dontMock('mobile-detect')

import React from 'react'
import ReactDOM from 'react-dom'
import { renderToString } from 'react-dom/server'
import TestUtils from 'react-addons-test-utils'

const ReactSmartAppBanner = require('../smart-app-banner')

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

  it('renders for android like Nexus 5', () => {
    const __origNav = window.navigator
    window['navigator'] = { userAgent: 'Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.114 Mobile Safari/537.36' }

    var component = renderComponent()
    expect(component).not.toBeFalsy()
    expect(component.state.os).toBe('android')
    expect(component.state.hide).toBe(false)

    window['navigator'] = __origNav
  })

  it('renders for windows like Nokia Lumia 520', () => {
    const __origNav = window.navigator
    window['navigator'] = { userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)' }

    var component = renderComponent()
    expect(component).not.toBeFalsy()
    expect(component.state.os).toBe('windows')
    expect(component.state.hide).toBe(false)

    window['navigator'] = __origNav
  })

  it('renders for ios like iPhone 4 on ios 4', () => {
    const __origNav = window.navigator
    window['navigator'] = { userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5' }

    var component = renderComponent()
    expect(component).not.toBeFalsy()
    expect(component.state.os).toBe('ios')
    expect(component.state.hide).toBe(false)

    window['navigator'] = __origNav
  })

  it("doesn't render for iPhone 5 on ios 7", () => {
    const __origNav = window.navigator
    window['navigator'] = { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53' }

    var component = renderComponent()
    expect(component).not.toBeFalsy()
    expect(component.state.os).toBe('ios')
    expect(component.state.hide).toBe(true)

    window['navigator'] = __origNav
  })

  describe('when rendering in server', () => {

    it('renders', () => {
      var component = serverRenderComponent()
      expect(component).not.toBeFalsy()
    })

  })

})
