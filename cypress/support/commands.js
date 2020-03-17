// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import {weblocator} from '../integration/webshop/weblocator'

Cypress.Commands.add('Clickonlink', (label) => 
{ 
    cy.get('div.listbox').find('.inactive').contains(label).click()
})

// Categories Grid
Cypress.Commands.add('CategoriesList', (CategoriesName, receiptName, txtmessage) => 
{ 
    cy.get('div.product-list').find('div.details').each((ProdN, index, $list) =>{
        const ProdName = ProdN.find('h2.product-title').text()
        if(ProdName.includes(CategoriesName))
        {
            cy.get('input[value="Add to cart"]').eq(index).click()

            // Enter the customer details
            cy.get('.recipient-name').type(receiptName)
            cy.get('.message').type(txtmessage)
            cy.get('.giftcard').then($input =>
                {                    
                    if($input.find('.recipient-email').is(':visible'))
                    {
                        cy.get('.recipient-email').type('adsa@mail.com')
                    }
                })
            cy.get('.button-1.add-to-cart-button').click()
        }
    }) 

})

// Categories Grid
Cypress.Commands.add('CategoriesGrid', (CategoriesName, receiptName, txtmessage) => 
{ 
    cy.get('div.product-grid').find('div.details').each((ProdN, index, $list) =>{
        const ProdName = ProdN.find('h2.product-title').text()
        if(ProdName.includes(CategoriesName))
        {
            cy.get('input[value="Add to cart"]').eq(index).click()

            // Enter the customer details
            cy.get('.recipient-name').type(receiptName)
            cy.get('.message').type(txtmessage)
            cy.get('.giftcard').then($input =>
                {                    
                    if($input.find('.recipient-email').is(':visible'))
                    {
                        cy.get('.recipient-email').type('adsa@mail.com')
                    }
                })
            cy.get('.button-1.add-to-cart-button').click()
        }
    }) 

})

// SelectProduct from List
Cypress.Commands.add('SelectProduct', (CategoriesName) => 
{ 
    cy.get('div.product-grid').find('div.details').each((ProdN, index, $list) =>{
        const ProdName = ProdN.find('h2.product-title').text()
        // cy.log(ProdName)
        cy.log(CategoriesName)

        if(ProdName.includes(CategoriesName))
        {
            // .product-box-add-to-cart-button
            cy.get('input[value="Add to cart"]').eq(index).click()

        }
    }) 

})


Cypress.Commands.add('ValidateTotalPrices', (ProductName) => 
{
    cy.get(weblocator._cart).find(weblocator._Itemrow).each((cart, index, $list) =>
    {
       var editQty = index + 1
       var intQty = ':nth-child(' + editQty + ') > .qty > .qty-input'

       var Prod = cart.find(weblocator._ProdName).text()
        if (Prod.includes(ProductName))
        {
            var Price = cart.find(weblocator._UnitPrice).text() 
            var Quantity = cart.find(weblocator._Quantity).val() 
            var Total = cart.find(weblocator._SubTotal).text()
            var TotPrice = (Price * Quantity)
            expect(Total).to.equals(TotPrice.toFixed(2))
             
        }

    })

})

Cypress.Commands.add('Shippingaddress', () => 
{ 
    cy.wait(2000)
    cy.get('.tab-section.allow.active').then(butt =>
    {
        if(butt.find('.button-1.new-address-next-step-button').is(':visible'))
        {
            cy.get('.description i').should('have.text', 'Pick up your items at the store (put your store address here)') 
            cy.get('#shipping-buttons-container > .button-1').click()
        } 
    })
})
Cypress.Commands.add('Shippingmethod', () => 
{
    cy.wait(2000)
    cy.get('.tab-section.allow.active').then($bton => 
    {
        if ($bton.find('.button-1.shipping-method-next-step-button').is(':visible')) 
        {
            cy.get('#shipping-method-buttons-container > .button-1').click()
        }  
    })
})





// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
