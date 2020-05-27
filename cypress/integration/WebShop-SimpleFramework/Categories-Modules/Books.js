///<reference types='cypress'/>

import {Books} from '../WebshopScripts/BooksCode'

describe('Demo-WebShop Suit', function()
{
    beforeEach(function BooksModule()
    {
        cy.fixture('WebshopDatatable/BooksTestData').then(function(BooksData)
        {
            this.bdata = BooksData
        })

    })

    it('BooksModule', function()
    {  
        Books.PurchaseBooks(this.bdata)
    })

})
