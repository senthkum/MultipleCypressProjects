Feature: Login

Login webshop and purchase giftcard.
 
Scenario: Purchase Giftcard and Validate the product Ordered.
 
Given I launch Demo Webshop website
When I enter as a valid user and validate the user
And I search for the product add user details and addtocart
And I click on shopping cart link and verify the product quantity
And I checkout the product
And I add the user billing address
And I add the user payment method
And I add the user payment information
And I click on confirm button
Then I captured the order number purchased