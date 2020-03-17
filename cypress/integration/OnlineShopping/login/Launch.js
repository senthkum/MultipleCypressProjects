/// <reference types="Cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I launch Demo Webshop website',()=>{
    cy.visit('http://demowebshop.tricentis.com/');
})
 
When('I enter as a valid user and validate the user',()=>{
    cy.get('.ico-login').click()

    cy.get('#Email').type('boy@mail.com')
    cy.get('#Password').type('Boy123')
    cy.get('.button-1.login-button').click()

    cy.get('.ico-logout').should('have.text', 'Log out')
})
 
And('I search for the product add user details and addtocart',()=>{ 
    cy.get('div.listbox').find('.inactive').contains('Gift Cards').click()

    cy.get('div.product-grid').find('div.details').each((prodT, index, $list) => {
        const strTitle = prodT.find('h2.product-title').text()
        if(strTitle.includes('$5 Virtual Gift Card'))
        {
            cy.get('input[value="Add to cart"]').eq(index).click()
//add to cart
              cy.get('.recipient-name').type('testing')
              cy.get('.recipient-email').type('boy@mail.com')
              cy.get('.message').type('message box')
              cy.get('input[value="Add to cart"]').eq(index).click()      
                  
        }
    })
})
 
And('I click on shopping cart link and verify the product quantity',()=>{
 
    cy.get('.ico-cart').find('.cart-label').click()
    cy.get('.cart').find('.cart-item-row').each((cart, index, $list) =>
    {
        cart.find('.remove-from-cart').find('input[type="checkbox"]').click()

        var Price = cart.find('.product-unit-price').text() 
        var Quantity = cart.find('.qty-input').val() 
        var Total = cart.find('.product-subtotal').text()
        var TotPrice = (Price * Quantity)
        expect(Total).to.equals(TotPrice.toFixed(2))
        
    })
 
})

And('I checkout the product',()=>{
    cy.get('[type="checkbox"]').check()
    cy.get('#checkout').click()
})

And('I add the user billing address',()=>{
    cy.get('#billing-address-select').select('tarun boy, asdf, asdf 3034, Australia').should('have.value', "1233919")
    cy.get('#billing-buttons-container').find('input[title="Continue"]').click()
})

And('I add the user payment method',()=>{
    cy.get('#paymentmethod_0').click()
    cy.get('#payment-method-buttons-container').find('input[value="Continue"]').click()    
})

And('I add the user payment information',()=>{
    cy.get('td > p').should('have.text', 'You will pay by COD')
    cy.get('#payment-info-buttons-container').find('input[value="Continue"]').click()
})

And('I click on confirm button',()=>{
    cy.get('#confirm-order-buttons-container').find('input[value="Confirm"]').click()
    cy.get('div.title').find('strong').should('have.text', 'Your order has been successfully processed!')
    cy.wait(3000)
})

Then('I captured the order number purchased',()=>{
    cy.get('.details > :nth-child(1)').then(function(Onum)
    {
        cy.log(Onum.text())
    })

    cy.get('div.buttons').find('input[value="Continue"]').click()        

})

