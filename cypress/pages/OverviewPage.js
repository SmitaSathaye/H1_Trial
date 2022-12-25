class overviewPage {
    elements = {
      paymentInfo: () => cy.get('div#checkout_summary_container div.summary_info > div:nth-child(2)'),
      shippingInfo: () => cy.get('div#checkout_summary_container div:nth-child(4)'),
      finishBtn: () => cy.get('[data-test="finish"]')    
    };

orderInfo() {   
  this.elements.paymentInfo().contains('SauceCard #31337')
  this.elements.shippingInfo().contains('FREE PONY EXPRESS DELIVERY!')
    
  cy.get('[class="summary_total_label"]')
    .each(val=>{
    cy.log(val.text())            
    })
}

finishOrder() {
  this.elements.finishBtn().click()
  cy.contains('Checkout: Complete!')
  cy.contains('THANK YOU FOR YOUR ORDER')
}

}
   
export default new overviewPage();
  