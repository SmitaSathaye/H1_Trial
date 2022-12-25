import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const overviewPage = require("../../pages/OverviewPage").default; 
  
Given("User can see the payment and shipping information, and the total price with taxes", function () {
  overviewPage.orderInfo()
});
  
Given("User gets your order was successful message on order completion", function () {
  overviewPage.finishOrder()
});
  
  
  
    
  
    
  