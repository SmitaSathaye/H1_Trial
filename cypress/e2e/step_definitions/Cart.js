import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const cartPage = require("../../pages/CartPage"); 
  
  Given("User navigates to cart", () => {
    cartPage.gotoCart()     
  });

  Then("Product {string} is not available in cart", (product) => {
    cartPage.productUnavailable(product)  
  });

  Given("Product {string} is available in cart with price {string}", (product, value) => {
    cartPage.productAvailableWithPrice(product, value)  
  });

  Then("User removes product {string} from cart", (product) => {
    cartPage.removeProduct(product)  
  });

  Given("User clicks checkout", function () {
   cartPage.checkout()
  });

  
  
    
  
    
  