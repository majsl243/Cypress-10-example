const SELECTORS = {
  navBar: ".gnb__nav",  
  cartBtn: ".gnb__mobile-menu > .gnb__cart-btn",
  payNowBtn: ".data-omni-proceedtocheckout",
  checkoutAsGuest: "#b2C_Continue_Guest"
}
    
    class CommonHelper {
      goToCart () {
          cy.get(`${SELECTORS.navBar} ${SELECTORS.cartBtn}`).click()
      }

      payNow() {
        cy.contains("Pay Now").click()
      }

      checkoutAsGuest() {
        this.clickOnField(SELECTORS.checkoutAsGuest)
      }

      clickOnField(fieldPath) {
        cy.get(fieldPath).click()
      }

      selectField(field) {
        this.clickOnField(field)
      }

      unSelectField() {
        this.clickOnField('.stepper-list > ul')
      }

      verifyErrorMessage(field, errorMsg, shouldBeVisible) {
        cy.get(field).parent().within(() => {
          if(shouldBeVisible) {
            cy.get(".input-error-msg").contains(errorMsg).should("be.visible")
          } else {
            cy.get(".input-error-msg").should("not.be.visible")
          }
        })
      }

      typeInField(field, text) {
        cy.get(field).type(text)
      }
    }
    
    export default CommonHelper
