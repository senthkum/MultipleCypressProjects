/// <reference types="Cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('I am logged in to demowebshop',()=>{
    cy.visit('http://demowebshop.tricentis.com/');
})

And('I click on signin', () =>{
    cy.get('.ico-login').click()
})

When(/^I enter a username "([^"]+)" and password "([^"]+)"$/, (Username, Password)=>{
    cy.get('#Email').type(Username)
    cy.get('#Password').type(Password)        
    cy.get('.button-1.login-button').click()    
})

Then('Verify the logout is enabled', ()=>{
    cy.get('.ico-logout').should('have.text', 'Log out')
})

And(/^select the main product "([^"]+)" to purchase$/, (mainprod)=>{ 
    cy.get('div.listbox').find('.inactive').contains(mainprod).click()
})

And(/^select sub-product "([^"]+)" fromm the table$/, (subproduct)=>{

    cy.get('div.product-grid').find('div.details').each((prodT, index, $list) => {
        const strTitle = prodT.find('h2.product-title').text()
        if(strTitle.includes(subproduct))
        {
            cy.get('input[value="Add to cart"]').eq(index).click()
            cy.wait(2000)
        }
    })
})


And(/^Enter the customer details "([^"]+)" and "([^"]+)" click on AddtoCart$/, (RecName, RecMail) =>{

    cy.get('.recipient-name').type(RecName)
    cy.get('.giftcard').then($input =>
        {                    
            if($input.find('.recipient-email').is(':visible'))
            {
                cy.get('.recipient-email').type(RecMail)
            }
        })
    cy.get('.message').type('message box')
    cy.get('input[value="Add to cart"]').eq(0).click()
    cy.wait(1000)
})

And('Clicking on the Shopping Cart link', ()=>{
    cy.get('.ico-cart').find('.cart-label').click()
})

Then(/^Verify the product price and Quantity from the table "([^"]+)"$/, (subproduct)=>{
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
 
And('Click on Checkout button', ()=>{
    cy.get('[type="checkbox"]').check()
    cy.get('#checkout').click()
})

Then('Enter billing address to your orders', ()=>{
    cy.get('#billing-address-select').select('tarun boy, asdf, asdf 3034, Australia').should('have.value', "1233919")
    cy.get('#billing-buttons-container').find('input[title="Continue"]').click()
    cy.wait(1000)
})

And('Enter Shipping Address', ()=>{
    //Shipping address                       
    cy.get('.tab-section.allow.active').then(butt =>
    {
        if(butt.find('.button-1.new-address-next-step-button').is(':visible'))
        {
            cy.get('.description i').should('have.text', 'Pick up your items at the store (put your store address here)') 
            cy.get('#shipping-buttons-container > .button-1').click()
        } 
    })
    cy.wait(1000)    
})

And('Select Shipping Method', ()=>{
    cy.get('.tab-section.allow.active').then($bton => 
    {
        if ($bton.find('.button-1.shipping-method-next-step-button').is(':visible')) 
        {
            cy.get('#shipping-method-buttons-container > .button-1').click()
        }  
    })
    cy.wait(1000)    
})


And(/^Select Payment Method "([^"]+)"$/, (mode)=>{
    switch (mode)
    {
        case "COD":
            cy.get('#paymentmethod_0').click()
            break
        case "MoneyOrder":
            cy.get('#paymentmethod_1').click()
            break
        case "CreditCard":
            cy.get('#paymentmethod_2').click()
            break
        case "PurchaseOrder":
            cy.get('#paymentmethod_3').click()
            break
         default :

    }

    cy.get('#payment-method-buttons-container').find('input[value="Continue"]').click()            
})

And(/^Proceed with Payment Information "([^"]+)"$/, (mode)=>{

    switch (mode)
    {
        case "COD":
            cy.get('td > p').should('have.text', 'You will pay by COD')
            cy.get('#payment-info-buttons-container').find('input[value="Continue"]').click()            
        case "MoneyOrder":

        case "CreditCard":

        case "PurchaseOrder":

         default :

    }
})

And('Click on Confirm Order', () => {
    cy.get('#confirm-order-buttons-container').find('input[value="Confirm"]').click()
})


Then('Verify the Order confirmation', () => {
    
    cy.get('div.title').find('strong').should('have.text', 'Your order has been successfully processed!')
    cy.get('.details > :nth-child(1)').then(function(Onum)
    {
        cy.log(Onum.text())
    })

    // cy.get('.details > :nth-child(2)').then(function(Modifylink)
    // {
    //     cy.log(Modifylink.text())
    // })
    cy.get('div.buttons').find('input[value="Continue"]').click()        

})


