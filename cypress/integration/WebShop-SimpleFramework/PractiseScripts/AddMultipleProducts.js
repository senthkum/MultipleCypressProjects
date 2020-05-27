/// <reference types="cypress" />
import { weblocator } from '../weblocator'


describe('ClickingonElectronicMainMenu', function()
{

    beforeEach(function BooksModule()
    {
        cy.fixture('WebshopDatatable/Electronic.json').then(function(eData)
        {
            this.getVal = eData
        })

    })

    it('MouseOver Script', function()
    {

        //Launch the url
        cy.visit(this.getVal.url)

        cy.get('.top-menu').find('li').find('a').as('strCatg')             
        cy.get('@strCatg').each((findli, index, $list)=>{
            if(findli.text().match('Electronics'))
            {
                findli.eq(index).trigger('mouseover')
                cy.contains('Cell phones').click({force: true})                
            }
            else
            {
                findli.eq(index).click()
            }
            
         }) 
         cy.pause()

        // // Enter the login details
        // cy.get('.ico-login').click()

        // cy.get('#Email').type(this.getVal.email)
        // cy.get('#Password').type(this.getVal.password)
        // cy.get('.button-1.login-button').click()

        //Select the product

        // for(let i = 0; i < this.getVal.categories.length; i++)
        // {
        //     for(let j = i; j < this.getVal.Subcategories.length; j++)
        //     {
        //         var strcategories = this.getVal.categories[i]
        //         var strSubProduct = this.getVal.Subcategories[j]
        //         var strProdName = this.getVal.productName
        //         cy.log(strcategories)    
        //         cy.log(strSubProduct)
        //         cy.ClickonTopMenu(strcategories, strSubProduct)
        //         break;
        //     }
        // }
        // cy.pause()
        

        //
        // cy.SelectProduct(this.getVal.productName)
        
        // // Click on shoping cart lable
        // cy.get('.ico-cart').find('.cart-label').click()

        // //Get the quantity from the table
        // cy.get('.cart').find('.cart-item-row').each((cart, index, $list) =>
        // {
        // cart.find('.remove-from-cart').find('input[type="checkbox"]').click()

        //     var Price = cart.find('.product-unit-price').text()
        //     var Quantity = cart.find('.qty-input').val() 
        //     var Total = cart.find('.product-subtotal').text()
        //     var TotPrice = (Number(Price) * Number(Quantity))

        //     expect(Total).to.equals(TotPrice +'.00')
            
        // })

        // cy.get('[type="checkbox"]').check()
        // cy.get('#checkout').click()

        // //Billing Address
        // cy.get('#billing-address-select').select('tarun boy, asdf, asdf 3034, Australia').should('have.value', "1233919")
        // cy.get('#billing-buttons-container').find('input[title="Continue"]').click()
        // cy.wait(1000)

        // //Shipping address
        //     cy.get('.tab-section.allow.active').then(butt =>
        //     {
        //         if(butt.find('.button-1.new-address-next-step-button').is(':visible'))
        //         {
        //             cy.get('.description i').should('have.text', 'Pick up your items at the store (put your store address here)') 
        //             cy.get('#shipping-buttons-container > .button-1').click()
        //             cy.wait(1500) 
        //         } 
        //     })


        // //Shipping method
        //     cy.get('.tab-section.allow.active').then($bton => 
        //     {
        //         if ($bton.find('.button-1.shipping-method-next-step-button').is(':visible')) 
        //         {
        //             cy.get('.method-name').find('#shippingoption_0').click()
        //             cy.get('#shipping-method-buttons-container > .button-1').click()
        //             cy.wait(1500)
        //         }  
        //     })
            
            
        //     //Payment method    
        //     cy.get('#paymentmethod_0').click()
        //     cy.get('#payment-method-buttons-container').find('input[value="Continue"]').click()    
        //     cy.wait(1500)

        //     cy.get('td > p').should('have.text', 'You will pay by COD')
        //     cy.get('#payment-info-buttons-container').find('input[value="Continue"]').click()
        //     cy.wait(1500)

        //     cy.get('#confirm-order-buttons-container').find('input[value="Confirm"]').click()
        //     cy.get('div.title').find('strong').should('have.text', 'Your order has been successfully processed!')
        //     cy.wait(1500)


        //     cy.get('.details > :nth-child(1)').then((Onum)=>
        //     {
        //         cy.log(Onum.text())
        //     })

        //     cy.get('.details > :nth-child(1)').then(function(Onum)
        //     {
        //         cy.log(Onum.text())
        //     })


        //     cy.get('.details > :nth-child(2)').then(function(Modifylink)
        //     {
        //         cy.log(Modifylink.text())
        //     })
        //     cy.get('div.buttons').find('input[value="Continue"]').click()   
            
        //     cy.get('.ico-logout').click()
            
        });        
    })

            

