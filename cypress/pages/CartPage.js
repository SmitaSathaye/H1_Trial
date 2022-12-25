class cartPage {
  elements = {
    cart: () => cy.get('div#shopping_cart_container > a'),
    cartTitle : () => cy.get('div#header_container div.header_secondary_container > span'),
    checkoutBtn : () => cy.get('[data-test="checkout"]')
  };
  
gotoCart() {
  this.elements.cart().click()
  this.elements.cartTitle()
  .should('be.visible').contains('Your Cart')
} 

productUnavailable(product) {
  cy.contains(product).should('not.exist');
}

productAvailableWithPrice(product,value) {
  let names=[];
  let price=[];
  cy.get('[class="inventory_item_name"]')
    .each(val=>{
    names.push(val.text())
 })
    .then(()=>{
    cy.wrap(names).as('prodname')
 })

  cy.get('[class="inventory_item_price"]')
    .each(val=>{
    price.push(val.text())
 })
    .then(()=>{
    cy.wrap(price).as('prodprice') // cypress cannot hold value
 })
        
  cy.get('@prodname').then(name=>{
  cy.get('@prodprice').then(price=>{
    for (let i = 0; i < name.length; i++) {
      if(name[i].includes(product)){
        expect(price[i]).equals(value)
      }
    }
  })
  })        
}

removeProduct(product){
  switch(product){
  case "Backpack":
   cy.get('[data-test="remove-sauce-labs-backpack"]').click()
   break;
     
  case "Bike Light":
   cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
   break;
       
  case "T-Shirt":
   cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
   break;
  }
}

checkout(){
  this.elements.checkoutBtn().click()
  cy.contains('Checkout: Your Information')
}

}

module.exports = new cartPage();
  