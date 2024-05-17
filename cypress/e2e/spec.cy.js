import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario ="random01"
    const password="random01"
    cy.visit('https://demoblaze.com/index.html')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login(usuario,password)
    cy.get('a#nameofuser').should('contain.text',usuario)
  })
})