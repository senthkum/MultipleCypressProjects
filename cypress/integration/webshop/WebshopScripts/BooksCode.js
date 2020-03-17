

import loginPage from '../PageObject-webShop/loginPage';
import homePage from '../PageObject-webShop/homePage';
import addtocart from '../PageObject-webShop/addtoCart';
import checkoutPage from '../PageObject-webShop/checkoutPage';
import { weblocator } from '../weblocator'

export class Books {
    static PurchaseBooks(getData) {
        const objloginPage = new loginPage();
        const objhomePage = new homePage();
        const objaddtocart = new addtocart();
        const objcheckoutPage = new checkoutPage();
        //Launch the url
        cy.visit(getData.url);
        
        // Enter the login details
        objloginPage.loginLink().click();
        objloginPage.getMailid().type(getData.email);
        objloginPage.getPassword().type(getData.password);
        objloginPage.loginButton().click();

        cy.Clickonlink(getData.categories);
        
        // Select the product from the table
        cy.SelectProduct(getData.productName);

        //Click on Shopping Cart link
        objaddtocart.shoppingLink().click();

        // cy.get('.ico-cart').find('.cart-label').click()
        //Get the quantity from thetable
        cy.ValidateTotalPrices(getData.productName);

        //click on the Checkbox        
        objcheckoutPage.clickCheckOut().check();
        objcheckoutPage.checkoutButton().click();
        //Billing Address

        objcheckoutPage.getBillingAdrs().select('tarun boy, asdf, asdf 3034, Australia').should('have.value', "1233919");
        objcheckoutPage.billingAdrsButton().click();

        // Shipping address 
        cy.Shippingaddress();

        //Shipping method
        cy.Shippingmethod();

        objcheckoutPage.clickCOD().click();
        objcheckoutPage.PaymentMethodButton().click();
        objcheckoutPage.getText().should('have.text', 'You will pay by COD');
        objcheckoutPage.containerButton().click();
        cy.get('#confirm-order-buttons-container').find('input[value="Confirm"]').click();
        cy.get('div.title').find('strong').should('have.text', 'Your order has been successfully processed!');
        cy.get('.details > :nth-child(1)').then(function (Onum) {
            cy.log(Onum.text());
        });
        cy.get('.details > :nth-child(2)').then(function (Modifylink) {
            cy.log(Modifylink.text());
        });
        cy.get('div.buttons').find('input[value="Continue"]').click();
    }
}
