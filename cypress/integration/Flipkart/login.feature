Feature: Login to Flipkart portal
Description: Login to eFlipkartbay portal and purchase giftcard.
 
Scenario: Login to Flipkart and verify.
 
Given I launch Flipkart website
When I enter the valid username and password
Then Verify the logout is enabled


Scenario: Login to Flipkart and verify the error.
 
Given I launch Flipkart website
When I enter the invalid username and password
Then Verify the error message displayed on the landing page