@Purchase
Feature: User purchase page 

Background:
        Given Swaglabs website has opened successfully
        When User login with the username "standard_user" and password "secret_sauce"

@THRNDL-536 @Positive
Scenario: @THRNDL-536 Validate that user is able to purchase product 
        When Product page is presented        
        And User adds product "Backpack" to cart
        Then User navigates to cart 
        And Product "Backpack" is available in cart with price "$29.99"

@THRNDL-310 @Positive
Scenario: @THRNDL-310 Validate that user is able to purchase product 
        When Product page is presented
        Then User adds product "T-Shirt" to cart
        And User adds product "Bike Light" to cart
        And User adds product "Backpack" to cart
        Then User navigates to cart 
        And Product "Backpack" is available in cart with price "$29.99"
        And Product "T-Shirt" is available in cart with price "$15.99"
        And Product "Bike Light" is available in cart with price "$9.99"
        Then User removes product "Backpack" from cart
        And User clicks checkout
        Then User completes the checkout form and click continue 
        And User can see the payment and shipping information, and the total price with taxes
        Then User gets your order was successful message on order completion

@THRNDL-310 @Negative
Scenario Outline: @THRNDL-310_Negative Validate that user is not able to purchase a non existing product  
        When Product page is presented
        And User adds product "Mickey" to cart
        Then User navigates to cart 
        And Product "Mickey" is not available in cart
        And User clicks checkout
        And User checks empty field for firstname "<fname>" lastname "<lname>" zipcode "<code>" 
        Then User gets error message "<msg>"
Examples: 
    | fname  | lname  | code   | msg                             |
    |        | Mouse  | 10369  | Error: First Name is required   |
    | Mickey |        | 10369  | Error: Last Name is required    |
    | Mickey | Mouse  |        | Error: Postal Code is required  |
    
        
        
        
        



