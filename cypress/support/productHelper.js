import CommonHelper from '../support/commonHelper.js'

const SELECTORS = {
    specsContainerDiv: ".hubble-product__content-inner",    
    exchangeDiv: "#trade-in",
    productOptionsWrap: "hubble-product__options-wrap",
    deviceDiv: ".s-option-device",
    storageDiv: ".s-option-storage",
    colorDiv: ".s-option-color-special",
    checkoutBtn: ".add-to-cart-btn"
    }
    
    const commonHelper = new CommonHelper()
 
    class ProductView {
      fillProductSpecs () {
        this.selectSpec(`${SELECTORS.specsContainerDiv} ${SELECTORS.exchangeDiv}`, "No, thanks")
    
        this.proceedToCheckout()
      }
    
      selectSpec (optionsDivPath, option) {
          cy.get(optionsDivPath).contains(option).click()
      }
    
      proceedToCheckout () {
          commonHelper.clickOnField(".hubble-product__total-wrap > .hubble-product__total .hubble-product__total-cta-inner > .s-hubble-total-cta > .cta")
      }
    }
    
    export default ProductView

