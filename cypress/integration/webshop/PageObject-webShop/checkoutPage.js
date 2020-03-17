class checkoutPage
{

    clickCheckOut()
    {
        return cy.get('[type="checkbox"]')
    }
    checkoutButton()
    {
        return cy.get('#checkout')
    }
    getBillingAdrs()
    {
        return cy.get('#billing-address-select')
    }
    billingAdrsButton()
    {
        return cy.get('#billing-buttons-container').find('input[title="Continue"]')
    }
    getPickup()
    {
        return cy.get('#PickUpInStore')
    }
    getshippingAddress()
    {
        return cy.get('.description i')
    }
    shippingAddresButton()
    {
        return cy.get('#shipping-buttons-container').find('input[title="Continue"]')
    }
    
    getshippingMethod()
    {
        return cy.get('.method-name').find('#shippingoption_0')
    }
    shippingMethodButton()
    {
        return cy.get('#shipping-method-buttons-container').find('input[value="Continue"]')
    }       
    clickCOD()
    {
        return cy.get('#paymentmethod_0')
    }
    clickMoneyOrder()
    {
        return cy.get('#paymentmethod_1')
    }

    PaymentMethodButton()
    {
        return cy.get('#payment-method-buttons-container').find('input[value="Continue"]')
    }
       
    getText()
    {
        return cy.get('td > p')
    }
    containerButton()
    {
        return cy.get('#payment-info-buttons-container').find('input[value="Continue"]')
    }

}

export default checkoutPage;