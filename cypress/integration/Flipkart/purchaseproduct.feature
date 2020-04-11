Feature: Login to Flipkart portal
Description: Login to Flipkart and order for an Iphone.
 
Scenario: Login to Flipkart and verify.
 
Given I launch Flipkart website
When I enter the valid username and password
And verify the login username
And Search for the product Iphone
And Count the number of product displayed and select the model
When view the model with different angle on the same page
And Enter the pincode and click on AddtoCart
