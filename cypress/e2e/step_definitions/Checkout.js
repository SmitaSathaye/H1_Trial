import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const checkoutPage = require("../../pages/CheckoutPage").default; 

Given("User completes the checkout form and click continue", () => {
  checkoutPage.checkoutForm()
});

Given("User checks empty field for firstname {string} lastname {string} zipcode {string}", (fname, lname, code) => {
  checkoutPage.invalidCheckoutForm(fname, lname, code)
});

Given("User gets error message {string}", (msg) => {
  checkoutPage.invalidCheckoutForm(msg)
});



  

  
