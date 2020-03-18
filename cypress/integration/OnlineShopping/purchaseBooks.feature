Feature: PurchaseBooks
Login webshop and purchase Books.

  Scenario: Buy books worth $10.
    Given I am logged in to demowebshop
    When I enter as a valid user and validate the user
    Then Verify the logout is enabled

  Scenario: Search for the product
    Given I am selecting the product catalog
    When I find and add the product
    Then I Click on the addtoCart button
