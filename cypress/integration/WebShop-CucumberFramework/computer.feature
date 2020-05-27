Feature: Purchase Computer from Demo Web Shop Online store

        Scenario Outline: Purchase Giftcard and Validate the product Ordered.

            Given Launch the Demo Webshop Application
             When Enter the Username <Username>, password <Password> and validate
              And Click on the <Categories> and <Product> by mouserover event
             When Select the product <subProduct> from the table
              And Click on shippingcart link
              And Verify the product <product> price
              And Click on the terms and condition and Checkout
              And Enter or chose the billing address
              And Select the mode <mode> of payment
              And Check the payment information
              And Verify the product price and click on confirm button
             Then Captured the order number generated


        Examples:
                  | Username     | Password | Categories | Product   | subProduct       | RecpName   | RecpEmail           | mode |
                  | boy@mail.com | Boy123   | COMPUTERS  | Notebooks | 14.1-inch Laptop | fivedollar | fivedollar@mail.com | COD  |
		