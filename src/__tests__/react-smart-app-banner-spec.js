jest.dontMock('../index')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

const ReactSmartAppBanner = require('../index')

describe('ReactSmartAppBanner', () => {

  it('renders', () => {
    var component = TestUtils.renderIntoDocument(
      <ReactSmartAppBanner message='Hi' />
    )
    expect(component).not.toBeFalsy()
  })

})
