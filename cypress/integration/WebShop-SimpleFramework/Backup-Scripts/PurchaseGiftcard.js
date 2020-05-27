/// <reference types="cypress" />
describe('Giftcard-Suite', function() {

      it('PurchaseGiftcard-COD', function() {

      cy.visit('http://demowebshop.tricentis.com/')

      cy.get('.ico-login').click()

//Enter the login details
      cy.get('#Email').type('boy@mail.com')
      cy.get('#Password').type('Boy123')
      cy.get('input[value="Log in"]').click()

//Select Giftcard
       cy.get('.ico-logout').should('have.text', 'Log out')
       cy.get('.ico-logout').then(function(strValue)
       {
             cy.log(strValue.text())
       })

//Select Giftcard
      cy.get('ul.list').find('li.inactive').contains('Gift Cards').click()
      cy.wait(2000)

//Get the count of items
      cy.get('.item-box').should('have.length', 4)

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

//Click on shipping Cart
      cy.get('.ico-cart').find('.cart-label').click()

      cy.get('[type="checkbox"]').check()
      cy.get('#checkout').click()

      cy.get('#billing-address-select').select('tarun boy, asdf, asdf 3034, Australia').should('have.value', "1233919")
      cy.get('#billing-buttons-container').find('input[title="Continue"]').click()

      cy.get('#paymentmethod_0').click()
      cy.get('#payment-method-buttons-container').find('input[value="Continue"]').click()    

      cy.get('td > p').should('have.text', 'You will pay by COD')
      cy.get('#payment-info-buttons-container').find('input[value="Continue"]').click()

      cy.get('#confirm-order-buttons-container').find('input[value="Confirm"]').click()
      cy.get('div.title').find('strong').should('have.text', 'Your order has been successfully processed!')
      
      // cy.get('div.section.order-completed').find('.details').each((OrdNum, index, $list) =>{
      //       cy.log(index)
      //        const onum = OrdNum.find('li').eq(index).text()
      //        cy.log(onum)
      // })

      cy.get('.details > :nth-child(1)').then(function(Onum)
      {
            cy.log(Onum.text())
      })

      cy.get('.details > :nth-child(2)').then(function(Modifylink)
      {
            cy.log(Modifylink.text())
      })
      cy.get('div.buttons').find('input[value="Continue"]').click()

    })
  })

