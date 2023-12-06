describe('Add product', () => {
  it('add product', () => {
    
    const emailAddress = 'standard_user'
    const password = 'secret_sauce'
    
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(emailAddress)
    cy.get('#password').type(password, { log: false })
    cy.get('#login-button').click()
    
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()

    })
  })