///<reference types='cypress'/>

import {Computers} from '../MainScripts/ComputersCode'

describe('Demo-WebShop Suit', function()
{
    beforeEach(function ComputerModule()
    {

        cy.fixture('WebshopDatatable/ComputersTestData').then(function(ComputerData)
        {
            this.cdata = ComputerData
        })

    })

    it('ComputersModule', function()
    {
        Computers.PurchaseComputers(this.cdata)
    })

})
