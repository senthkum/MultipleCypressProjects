class addtoCart
{

    shoppingLink()
    {
        return cy.get('.ico-cart').find('.cart-label')
    }
    
    getProductTable()
    {
        return cy.get('.cart').find('.cart-item-row')
    }
    
}

export default addtoCart;