jest.dontMock('../smart-app-banner')
jest.dontMock('../close-button')
jest.dontMock('mobile-detect')

import React from 'react'
import ReactDOM from 'react-dom'
import { renderToString } from 'react-dom/server'
import TestUtils from 'react-addons-test-utils'

const ReactSmartAppBanner = require('../smart-app-banner')

describe('ReactSmartAppBanner', () => {

  var component
  const __origNav = window.navigator
  const __origLocalStorage = window.localStorage

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
    component = renderComponent()
    expect(component).not.toBeFalsy()
  })

  describe('when using a Nexus 5 on Chrome', () => {
    beforeEach(() => {
      window['navigator'] = { userAgent: 'Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.114 Mobile Safari/537.36' }
      component = renderComponent()
    })
    afterEach(() => {
      window['navigator'] = __origNav
    })
    it('renders', () => { expect(component).not.toBeFalsy() })
    it('is android', () => { expect(component.state.os).toBe('android') })
    it('is not hidden', () => { expect(component.state.hide).toBe(false) })
  })

  describe('when using a Nokia Lumia 520 on IEMobile', () => {
    beforeEach(() => {
      window['navigator'] = { userAgent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)' }
      component = renderComponent()
    })
    afterEach(() => {
      window['navigator'] = __origNav
    })
    it('renders', () => { expect(component).not.toBeFalsy() })
    it('is windows', () => { expect(component.state.os).toBe('windows') })
    it('is not hidden', () => { expect(component.state.hide).toBe(false) })
  })

  describe('when using an iPhone 4 on Safari for iOS 4.2.1', () => {
    beforeEach(() => {
      window['navigator'] = { userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5' }
      component = renderComponent()
    })
    afterEach(() => {
      window['navigator'] = __origNav
    })
    it('renders', () => { expect(component).not.toBeFalsy() })
    it('is ios', () => { expect(component.state.os).toBe('ios') })
    it('is not hidden', () => { expect(component.state.hide).toBe(false) })
  })

  describe('when using an iPhone 5 on Chrome for iOS 7.0', () => {
    beforeEach(() => {
      window['navigator'] = { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3' }
      component = renderComponent()
    })
    afterEach(() => {
      window['navigator'] = __origNav
    })
    it('renders', () => { expect(component).not.toBeFalsy() })
    it('is ios', () => { expect(component.state.os).toBe('ios') })
    it('is not hidden', () => { expect(component.state.hide).toBe(false) })
  })

  describe('when using an iPhone 5 on Safari for iOS 7.0', () => {
    beforeEach(() => {
      window['navigator'] = { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53' }
      component = renderComponent()
    })
    afterEach(() => {
      window['navigator'] = __origNav
    })
    it('renders', () => { expect(component).not.toBeFalsy() })
    it('is ios', () => { expect(component.state.os).toBe('ios') })
    it('is hidden', () => { expect(component.state.hide).toBe(true) })

    describe('but overwritting OS with android', () => {
      beforeEach(() => {
        component = renderComponent({ os: 'android' })
      })
      it('renders', () => { expect(component).not.toBeFalsy() })
      it('is android', () => { expect(component.state.os).toBe('android') })
      it('is not hidden', () => { expect(component.state.hide).toBe(false) })
    })
  })

  describe('when rendering in server', () => {
    it('renders', () => {
      component = serverRenderComponent()
      expect(component).not.toBeFalsy()
    })
  })

  describe('when close clicked', () => {
    var node

    beforeEach(() => {
      window['navigator'] = { userAgent: 'Mozilla/5.0 (Linux; Android 4.4.4; Nexus 5 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.114 Mobile Safari/537.36' }
    })
    afterEach(() => {
      window['navigator'] = __origNav
    })

    it('sets the hide state', () => {
      component = renderComponent()
      component.close()
      expect(component.state.hide).toBe(true)
    })

    describe('6 days ago', () => {
      beforeEach(() => {
        window['date'] = Date.now() - 86400000 * 6
        window['localStorage'] = {
          setItem: () => {},
          getItem: () => { return window['date'] },
          removeItem: () => { window['date'] = undefined },
        }
        component = renderComponent()
      })
      afterEach(() => {
        window['localStorage'] = __origLocalStorage
      })
      it('sets the hide state', () => { expect(component.state.hide).toBe(true) })
    })

    describe('8 days ago', () => {
      beforeEach(() => {
        window['date'] = Date.now() - 86400000 * 8
        window['localStorage'] = {
          setItem: () => {},
          getItem: () => { return window['date'] },
          removeItem: () => { window['date'] = undefined },
        }
        component = renderComponent()
      })
      afterEach(() => {
        window['localStorage'] = __origLocalStorage
      })
      it('sets the hide state', () => { expect(component.state.hide).toBe(false) })
    })
  })

  describe('when attributes are overwitten', () => {
    it('renders', () => {
      component = renderComponent({
        icon: {
          style: {
            android: { backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)' },
            windows: { backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)' },
            ios: { backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)' },
          },
        },
        header: {
          title: 'Facebook',
          subtitle: {
            android: 'Free - In Google Play',
            windows: 'Free - In Windows Store',
            ios: 'Free - On the App Store',
          },
        },
        viewButton: {
          attributes: {
            android: { href: 'https://play.google.com/store/apps/details?id=com.facebook.katana' },
            ios: { href: 'https://itunes.apple.com/US/app/id284882215' },
            windows: { href: 'http://www.windowsphone.com/s?appid=82a23635-5bd9-df11-a844-00237de2db9e' }
          },
          text: 'Open',
        },
      })
      expect(component).not.toBeFalsy()
    })
  })

})
