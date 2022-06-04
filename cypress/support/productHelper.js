import CommonHelper from '../support/commonHelper.js'

const SELECTORS = {
    specsContainerDiv: ".hubble-product__content-inner",    
    exchange: "#trade-in",
    productOptionsWrap: "hubble-product__options-wrap",
    device: ".s-option-device",
    storage: ".s-option-storage",
    color: ".s-option-color-special",
    checkoutBtn: ".add-to-cart-btn"
    }
    
  const selectionSpecs = ["exchange", "device", "storage", "color", "samsungCare"]

    const commonHelper = new CommonHelper()
 
    class ProductView {
      fillProductSpecs (specs) {
        Object.keys(specs).forEach((key) => {
          if (selectionSpecs.includes(key)) {
            this.selectSpec(`${SELECTORS.specsContainerDiv} ${SELECTORS[key]}`, specs[key])
          }
        })
    
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