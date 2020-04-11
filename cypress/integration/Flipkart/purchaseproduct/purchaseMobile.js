/// <reference types="Cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('I launch Flipkart website',()=>{
    cy.visit('https://www.flipkart.com/');
})
 
When('I enter the valid username and password',()=>{
    cy.get('._3Ep39l').click()

    cy.get("input[class='_2zrpKA _1dBPDZ']").type('9886100996')
    cy.get("input[class='_2zrpKA _3v41xv _1dBPDZ']").type('welcome@@1234')
    cy.get('._2AkmmA._1LctnI._7UHT_c').click()
    cy.wait(1000)
})

And('verify the login username',()=>{
    cy.get(':nth-child(3) > .dHGf8H > ._1jcwFN > :nth-child(1) > ._2aUbKa').should('have.text', 'senthil')
})

And('Search for the product Iphone', ()=>{
    cy.get('.LM6RPg').type('Apple iPhone XS Max (Space Grey, 512 GB)')
    cy.get('.LM6RPg').type('{enter}')
})

And('Count the number of product displayed and select the model', ()=>{

  cy.get('div._3O0U0u').find('div._1UoZlX').then(listing => {
    const listingCount = Cypress.$(listing).length;
    expect(listing).to.have.length(listingCount);
  });

    cy.get('div._3O0U0u').find('div._1UoZlX').each((ProdN, index, $list) =>{
    const ProdName = ProdN.find('div._3wU53n').text()
        if(ProdName.includes('Apple iPhone XS Max (Space Grey, 512 GB)'))
        {
            cy.get('._31qSD5').invoke('removeAttr', 'target').eq(index).click()
        }
    })

})

When('view the model with different angle on the same page', ()=>{

    // cy.get('.LzhdeS').children('._4f8Q22._2y_FdK').click({ multiple: true })
    cy.get('.LzhdeS').find('._4f8Q22._2y_FdK').each((img, index, $list) =>{
        cy.wait(1000)
        cy.get('._3MF26o').find('._2_AcLJ').eq(index).click({force: true})
          });        
})

And('Enter the pincode and click on AddtoCart', ()=>{

    cy.get('._3X4tVa').clear()
    cy.get('._3X4tVa').type('560048')
    cy.get('._2aK_gu').click()
})

