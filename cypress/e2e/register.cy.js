describe('successfully register a user', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/register')
    cy.get('[data-cy="email"]').type('frank@gmail.com')
    cy.get('[data-cy="email"]').should( 'have.value', 'frank@gmail.com')
    cy.get('[data-cy="password"]').type('password')
    cy.get('[data-cy="password"]').should( 'have.value', 'password')
    cy.get('button[type="submit"]').contains('Sign In').click()
   
    cy.url().should('include', '/login')
    
  })
})