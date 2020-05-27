Feature: Purchase Gift Card Online
Description:Login webshop and purchase Books.

        Scenario Outline: Purchase Categories <product> of <subproduct>
            Given I am logged in to demowebshop
              And I click on signin
             When I enter a username "<Username>" and password "<Password>"
             Then Verify the logout is enabled
              And select the main product "<product>" to purchase
              And select sub-product "<subproduct>" fromm the table
              And Enter the customer details "<RecName>" and "<RecMail>" click on AddtoCart
              And Clicking on the Shopping Cart link
             Then Verify the product price and Quantity from the table "<subproduct>"
              And Click on Checkout button
             Then Enter billing address to your orders
              And Enter Shipping Address
              And Select Shipping Method
              And Select Payment Method "<mode>"
              And Proceed with Payment Information "<mode>"
              And Click on Confirm Order
             Then Verify the Order confirmation
    

        Examples:
                  | product    | Username     | Password | product    | subproduct              | RecName  | RecMail       | mode |
                  | Gift Cards | boy@mail.com | Boy123   | Gift Cards | $100 Physical Gift Card | testname | test@mail.com | COD  |
                                    