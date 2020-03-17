/// <reference types="Cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I am logged in to demowebshop',()=>{
    cy.visit('http://demowebshop.tricentis.com/');
})
 
When('I enter as a valid user and validate the user',(datatable)=>{
    cy.get('.ico-login').click()

    datatable.hashes().forEach(element => {
        cy.get('#Email').type(element.email)
        cy.get('#Password').type(element.password)        
    });
    cy.get('.button-1.login-button').click()    
})

Then('Verify the logout is enabled', ()=>{
    cy.get('.ico-logout').should('have.text', 'Log out')
})

Given('I am selecting the product catalog',()=>{ 
    cy.get('div.listbox').find('.inactive').contains('Books').click()
})

When('I find and add the product', (productName)=>{

    cy.get('div.product-grid').find('div.details').each((prodT, index, $list) => {
        const strTitle = prodT.find('h2.product-title').text()
        if(strTitle.includes('Computing and Internet'))
        {
            cy.get('input[value="Add to cart"]').eq(index).click()
//add to cart
              cy.get('.recipient-name').type('testing')
              cy.get('.recipient-email').type('boy@mail.com')
              cy.get('.message').type('message box')               
        }
    })
})

Then('I Click on the addtoCart button', ()=>{
    cy.get('input[value="Add to cart"]').eq(index).click()   
})
 
Given('I am clicking on the shipping cart',()=>{
 
    cy.get('.ico-cart').find('.cart-label').click()
})

When('I am validating the total price', ()=>{
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


Then('I am checking out the product', ()=>{
    cy.get('[type="checkbox"]').check()
    cy.get('#checkout').click()
})
