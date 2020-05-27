/// <reference types="cypress" />
import { weblocator } from '../weblocator'

describe('Testsuite', function()
{
     beforeEach(function()
     {
         cy.fixture('WebshopDatatable/MultipleDataGiftcards.json').as('gifts')
    })

    // beforeEach(() => {
    //     cy.fixture('WebshopDatatable/MultipleDataGiftcards.json').as('gifts')
    //   })

    //   afterEach(() => {
    //     cy.get('.ico-logout').click()
    //   })



    it('AddingGiftCards', function()
    {
        cy.log(`There are ${this.gifts.GiftCards} .`)
        const gCards = this.gifts

        //Launch the url
        cy.visit('http://demowebshop.tricentis.com/')

         cy.get(gCards).each((giftobject) => 
         {     
            // Enter the login details
            cy.get('.ico-login').click()

            cy.get('#Email').type(giftobject.email)
            cy.get('#Password').type(giftobject.password)
            cy.get('.button-1.login-button').click()

        //select the CATEGORIES
            cy.Clickonlink(giftobject.categories)
            
        // Select the position
            cy.get('#products-orderby').select('Price: Low to High')
        //Select display
            cy.get('#products-pagesize').select('4')
        //Select view
            cy.get('#products-viewmode').select(giftobject.viewmode)

            if(giftobject.viewmode === "List")
            {
                // Select the product from the table
                cy.CategoriesList(giftobject.productName, 'senthil', 'testing')
            }
            else
                    {
                // Select the product from the table
                cy.CategoriesGrid(giftobject.productName, 'senthil', 'testing')
            }


            // Click on shoping cart lable
            cy.get('.ico-cart').find('.cart-label').click()

            //Get the quantity from the table
            cy.get('.cart').find('.cart-item-row').each((cart, index, $list) =>
            {
            cart.find('.remove-from-cart').find('input[type="checkbox"]').click()

                var Price = cart.find('.product-unit-price').text()
                var Quantity = cart.find('.qty-input').val() 
                var Total = cart.find('.product-subtotal').text()
                var TotPrice = (Number(Price) * Number(Quantity))

                expect(Total).to.equals(TotPrice +'.00')
                
            })

            cy.get('[type="checkbox"]').check()
            cy.get('#checkout').click()

            //Billing Address
            cy.get('#billing-address-select').select('tarun boy, asdf, asdf 3034, Australia').should('have.value', "1233919")
            cy.get('#billing-buttons-container').find('input[title="Continue"]').click()
            cy.wait(1000)
            cy.pause()

            //Shipping address
            cy.get('.tab-section.allow.active').then(butt =>
                {
                    if(butt.find('.button-1.new-address-next-step-button').is(':visible'))
                    {
                        cy.get('.description i').should('have.text', 'Pick up your items at the store (put your store address here)') 
                        cy.get('#shipping-buttons-container > .button-1').click()
                        cy.wait(2000) 
                    } 
                })
  

            //Shipping method
            cy.get('.tab-section.allow.active').then($bton => 
                {
                    if ($bton.find('.button-1.shipping-method-next-step-button').is(':visible')) 
                    {
                        cy.get('.method-name').find('#shippingoption_0').click()
                        cy.get('#shipping-method-buttons-container > .button-1').click()
                        cy.wait(2000)
                    }  
                })
                
                
            //Payment method    
            cy.get('#paymentmethod_0').click()
            cy.get('#payment-method-buttons-container').find('input[value="Continue"]').click()    
            cy.wait(2000)

            cy.get('td > p').should('have.text', 'You will pay by COD')
            cy.get('#payment-info-buttons-container').find('input[value="Continue"]').click()
            cy.wait(2000)

            cy.get('#confirm-order-buttons-container').find('input[value="Confirm"]').click()
            cy.get('div.title').find('strong').should('have.text', 'Your order has been successfully processed!')
            cy.wait(2000)


            cy.get('.details > :nth-child(1)').then((Onum)=>
            {
                cy.log(Onum.text())
            })

            cy.get('.details > :nth-child(1)').then(function(Onum)
            {
                cy.log(Onum.text())
            })


            cy.get('.details > :nth-child(2)').then(function(Modifylink)
            {
                cy.log(Modifylink.text())
            })
            cy.get('div.buttons').find('input[value="Continue"]').click()
            
            cy.get('.ico-logout').click()
        });        

    })

})
