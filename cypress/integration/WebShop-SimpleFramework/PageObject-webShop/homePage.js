class homePage
{

    getOrderby()
    {
        return cy.get('#products-orderby')
    }

    getPageSize()
    {
        return cy.get('#products-pagesize')
    }
    
    getViewMode()
    {
        return cy.get('#products-viewmode')
    }

    // Clickonlink()
    // {
    //     return 
    // }
    
}

export default homePage;