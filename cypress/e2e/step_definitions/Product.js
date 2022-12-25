import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const productPage = require("../../pages/ProductPage"); 
  
Given("Product page is presented", () => {
  productPage.productPageLoaded()  
});
  
Given("User adds product {string} to cart", (product) => {
  productPage.addProduct(product)    
});
  
    
  
    
  