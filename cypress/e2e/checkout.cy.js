/// <reference types="cypress" />
import ProductView from '../support/productHelper.js'
import CommonHelper from '../support/commonHelper.js'
import * as shippingDetailsHelpers from '../support/shippingDetailsHelper.js'
import * as constants from '../support/constants.js'


const product = new ProductView()
const commonHelper = new CommonHelper()
const shippingDetailsFields = [shippingDetailsHelpers.SELECTORS.firstName,
  shippingDetailsHelpers.SELECTORS.lastName,
  shippingDetailsHelpers.SELECTORS.email,
  shippingDetailsHelpers.SELECTORS.phone,
  shippingDetailsHelpers.SELECTORS.addressLine1,
  shippingDetailsHelpers.SELECTORS.pinCode
]
const productSpecs = {
  "exchange": "No, thanks",
  "color": "White"
}

describe('Checkout Scenario', () => {

  before(() => {
    cy.ignoreConsoleExceptions()

    cy.visit("/in/")  
    
    cy.get(".showcase-card-tab-inner-container .showcase-card-tab-card")
      .first()
      .click() 

    product.fillProductSpecs(productSpecs)

    commonHelper.goToCart()

    commonHelper.payNow()
    
    commonHelper.checkoutAsGuest()
  })

  it('Checkout as guest with required fields missing', () => {
    shippingDetailsFields.forEach((field) => {
      commonHelper.selectField(field)
      commonHelper.unSelectField(field)
      commonHelper.verifyErrorMessage(field, constants.ERROR_MESSAGE.requiredField, true)
    })
  })

  it('Checkout as guest with all required fields provided', () => {
    let shippingDetails = {
      firstName: 'Abdelmoneim',
      lastName: 'Hudhud',
      addressLine1: 'Ramallah',
      pinCode: '543536',
      email: 'test@test.com',
      phone: '9991112220'
    }

    shippingDetailsHelpers.fillInShippingDetails(shippingDetails)
    shippingDetailsFields.forEach((field) => {
      commonHelper.verifyErrorMessage(field, constants.ERROR_MESSAGE.requiredField, false)
    })
  })
})