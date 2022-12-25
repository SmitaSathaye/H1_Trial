import {faker} from '@faker-js/faker'
class checkoutPage {
  elements = {
    firstNameField: () => cy.get('[data-test="firstName"]'),
    lastNameField: () => cy.get('[data-test="lastName"]'),
    zipCodeField: () => cy.get('[data-test="postalCode"]'),
    continueBtn: () => cy.get('[data-test="continue"]'),
      
  };

checkoutForm() {
  this.elements.firstNameField().type(faker.name.firstName())
  this.elements.lastNameField().type(faker.name.lastName())
  this.elements.zipCodeField().type(faker.address.zipCode())
  this.elements.continueBtn().click()
  cy.contains('Checkout: Overview')
}

invalidCheckoutForm(fname, lname, code) {
  if(fname){
    this.elements.firstNameField().type(fname)
  }
  if(lname){
    this.elements.lastNameField().type(lname)
  } 
  if(code){
    this.elements.zipCodeField().type(code)
  }  
}

errorMsg(msg) {
  cy.contains(msg)
}

}

export default new checkoutPage();
