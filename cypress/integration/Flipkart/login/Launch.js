/// <reference types="Cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I launch Flipkart website',()=>{
    cy.visit('https://www.flipkart.com/');
})
 
When('I enter the valid username and password',()=>{
    cy.get('._3Ep39l').click()

    cy.get("input[class='_2zrpKA _1dBPDZ']").type('9886100996')
    cy.get("input[class='_2zrpKA _3v41xv _1dBPDZ']").type('welcome@@1234')
    cy.get('._2AkmmA._1LctnI._7UHT_c').click()

})

Then('Verify the logout is enabled',()=>{
    cy.get(':nth-child(3) > .dHGf8H > ._1jcwFN > :nth-child(1) > ._2aUbKa').should('have.text', 'senthil')

})

When('I enter the invalid username and password',()=>{
    cy.get('._3Ep39l').click()

    cy.get("input[class='_2zrpKA _1dBPDZ']").type('9886100996')
    cy.get("input[class='_2zrpKA _3v41xv _1dBPDZ']").type('welcome@@')
    cy.get('._2AkmmA._1LctnI._7UHT_c').click()

})

Then('Verify the error message displayed on the landing page',()=>{
    cy.get('.ZAtlA- > span').should('have.text', 'Your username or password is incorrect')

})


