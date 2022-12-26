# Name: 
***Saucedemo Homework***

# Description:
Homework assignment to demonstrate cypress automation capability on test site saucedemo.
This test framework is comprised of feature files which have tests expressed in gherkin format.
Along with the step definitions and page objects to automate the test, this also includes reporting capability using 'cypress-mochawesome-reporter'.
Lastly there is a github action pipeline to run the tests on chrome and edge browsers after each commit.

# User scenarios:
Task 1 & 2 are transformed in following fashion and are reflected in the report.
Login Feature:
1. User is able to login with valid credentials and is directed to the login page.
2. User is not able to login with invalid credentials and checks its error messages.

Purchase Feature:
1. User is able to add products in cart.
2. User is able to purchase existing products.
3. User is not able to purchase non existing products and check error messages.

# How to start
In order to start using this project. You will have to do the following steps:
1. Clone the project.
2. npm i - Install all the dependencies.
3. Run 'npm run chrome' or 'npm run edge'