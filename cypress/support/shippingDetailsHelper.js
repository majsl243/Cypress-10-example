import CommonHelper from '../support/commonHelper.js'

const commonHelper = new CommonHelper()

export const SELECTORS = {
  firstName: '[name="firstName"]',
  lastName: '[name="lastName"]',
  addressLine1: '[name="line1"]',
  pinCode: '[name="postalCode"]',
  email: '[name="email"]',
  phone: '[name="phone"]'
};

export function fillInShippingDetails (shippingDetails) {
  Object.keys(shippingDetails).forEach((key) => {
    commonHelper.typeInField(SELECTORS[key], shippingDetails[key])
  })
}