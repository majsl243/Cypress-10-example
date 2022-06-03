/// <reference types="cypress" />
import ProductView from '../support/productHelper.js'
import CommonHelper from '../support/commonHelper.js'
import ShippingDetailsHelper from '../support/shippingDetailsHelper.js'



const product = new ProductView()
const commonHelper = new CommonHelper()
const shippingDetailsHelper = new ShippingDetailsHelper()

describe('Checkout Scenario', () => {

  it('Checkout as guest with required fields missing', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })

    cy.visit("https://www.samsung.com/in/")  
    
    cy.get(".showcase-card-tab-inner-container .showcase-card-tab-card").first().click() 

    cy.wait(2000)
    product.fillProductSpecs()

    commonHelper.goToCart()

    cy.wait(2000)


    commonHelper.payNow()

    cy.wait(2000)

    
    commonHelper.checkoutAsGuest()
    commonHelper.selectField("")
    commonHelper.unSelectField()
    commonHelper.verifyErrorMessage('[name="firstName"]', "This is a required field.", true)

  })

  it('Checkout as guest with all required fields provided', () => {

    cy.wait(3000)

    commonHelper.typeInField('[name="firstName"]', "Hudhud")
    commonHelper.verifyErrorMessage('[name="firstName"]', "This is a required field.", false)
  })

})


// 543536
