@Login
Feature: User login page 

Background:
        Given Swaglabs website has opened successfully

@THRNDL-489 @Positive
Scenario: THRNDL-489 Validate that user is able to login successfully on Swaglabs website 
        When User login with the username "standard_user" and password "secret_sauce"
        Then Product page is presented

@THRNDL-489 @Negative 
Scenario Outline: THRNDL-489_Negative Validate the error message for locked out user
        When User login with the username "<user>" and password "<password>"
        Then Page has text "<text>"
Examples:
    | user             | password      | text                                                                      |
    | locked_out_user  | secret_sauce  | Epic sadface: Sorry, this user has been locked out                        |
    | standard_user    | secret_saue$  | Epic sadface: Username and password do not match any user in this service |
    | Mickey           | secret_sauce  | Epic sadface: Username and password do not match any user in this service |
    | Mickey           |               | Epic sadface: Password is required                                        |
    |                  | secret_sauce  | Epic sadface: Username is required                                        |
    |                  |               | Epic sadface: Username is required                                        |
    