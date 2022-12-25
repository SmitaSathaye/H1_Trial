class productPage {
    elements = {
      productPageTitle: () => cy.get('div#header_container div.header_secondary_container > span'),
      appLogo: () => cy.get('div#header_container div.header_label > div'),
      addBackPack: () => cy.get('button#add-to-cart-sauce-labs-backpack'),
      addTshirt: () => cy.get('button#add-to-cart-sauce-labs-bolt-t-shirt'),
      addBikeLight: () => cy.get('button#add-to-cart-sauce-labs-bike-light')
    };
  
productPageLoaded() {
  this.elements.productPageTitle()
  .should('be.visible').contains('Products')
  this.elements.appLogo()
  .should('be.visible')
}
   
addProduct(product) {              
  switch(product) {
  case "Backpack":
    this.elements.addBackPack().click()
    break;
  case "T-Shirt":
    this.elements.addTshirt().click()
    break;
  case "Bike Light":
    this.elements.addBikeLight().click()
    break;
  default:
    cy.log(`${product} is not available`)
  }
}

}

module.exports = new productPage();
  