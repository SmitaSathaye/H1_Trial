import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage"); 

Given("Swaglabs website has opened successfully", () => {
  cy.visit("/")
});

Then("User login with the username {string} and password {string}", (name,pass) => {
  loginPage.login(name, pass) 
});

Given("Page has text {string}", (text) => {
  cy.contains(text)
});

  

  
