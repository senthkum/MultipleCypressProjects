///<reference types='cypress'/>

import {Giftcard} from '../WebshopScripts/GiftcardCode'

describe('Demo-WebShop Suit', function()
{
    beforeEach(function GiftcardModule()
    {

        cy.fixture('WebshopDatatable/Giftcard').then(function(Giftcarddata)
        {
            this.gdata = Giftcarddata
        })

    })

    it('GiftcardModule', function()
    {
        Giftcard.PurchaseGiftcards(this.gdata)
    })

})
