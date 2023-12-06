describe('Sign up', () => {
  it('successfully signs in', () => {
    const emailAddress = 'standard_user'
    const password = 'secret_sauce'

    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(emailAddress)
    cy.get('#password').type(password, { log: false })
    cy.get('#login-button').click()

  })
})