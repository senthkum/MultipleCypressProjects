class loginPage
{
    loginLink()
    {
        return cy.get('.ico-login')
    }
    
    getMailid()
    {
        return cy.get('#Email')
    }

    getPassword()
    {
        return cy.get('#Password')
    }
    loginButton()
    {
        return cy.get('.button-1.login-button')
    }
}

export default loginPage;