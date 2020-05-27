///<reference types='cypress'/>

import {Giftcard} from '../MainScripts/GiftcardCode'

describe('Demo-WebShop Suit', function()
{
    beforeEach(function GiftcardModule()
    {

        cy.fixture('WebshopDatatable/Giftcards').then(function(Giftcarddata)
        {
            this.gdata = Giftcarddata
        })

    })

    it('GiftcardModule', function()
    {
        Giftcard.PurchaseGiftcards(this.gdata)
    })

})
