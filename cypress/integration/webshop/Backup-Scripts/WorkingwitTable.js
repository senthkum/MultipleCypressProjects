/// <reference types="cypress" />
describe('Giftcard-Suite', function() 
{

    it('WorkingwithTables-COD', function() 
    {

        cy.visit('http://demowebshop.tricentis.com/')

        cy.get('.ico-login').click()

    //Enter the login details
        cy.get('#Email').type('boy@mail.com')
        cy.get('#Password').type('Boy123')
        cy.get('input[value="Log in"]').click()

         cy.get('.ico-logout').should('have.text', 'Log out')

        //Select Giftcard
        cy.get('ul.list').find('li.inactive').contains('Gift Cards').click()
        cy.wait(1000)
        cy.get('div.item-box').should('have.length', 4)
        debugger
       
        var strval = 'false'
        cy.get('div.product-grid').find('div.details').each((prodT, index, $list) => {
            const strTitle = prodT.find('h2.product-title').text()
            if(strTitle.includes('$25 Virtual Gift Card'))
            {
                return strval = 'true'
            }

        });

          if(strval ==='true')
          {
              cy.log('pass')
          }
          else
          {
            cy.log('False')
          }

        })

    })






// cy.get('h2.product-title').each((ProdName, index, $list) => {
//     if (ProdName.text().includes("$25 Virtual Gift Card"))
//     {                  
//           cy.get('input[type="button"]').eq(index+1).click()
// //add to cart
//           cy.get('.recipient-name').type('testing')
//           cy.get('.recipient-email').type('boy@mail.com')
//           cy.get('.message').type('message box')
//           cy.get('input[value="Add to cart"]').eq(index).click()                  
//     }     

//     })
