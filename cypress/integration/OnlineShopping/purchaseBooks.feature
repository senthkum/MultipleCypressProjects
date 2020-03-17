Feature: PurchaseBooks
Login webshop and purchase Books.

  Scenario: Buy books worth $10.
    Given I am logged in to demowebshop
    When I enter as a valid user and validate the user
    Then Verify the logout is enabled

