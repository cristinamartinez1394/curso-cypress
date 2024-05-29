import { LoginMethods } from "./pages/login/login.methods"
import { Logger } from "./util/logger"

describe('template spec', () => {
  it('passes', () => {
    const usuario ="random01"
    const password="random01"
    Logger.stepNumber(1)
    Logger.step('Navigate to DemoBlaze')
    cy.visit('https://demoblaze.com/index.html')

    Logger.stepNumber(2)
    Logger.step('Click on "login"')
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
    Logger.step(`Login with credentials:"${usuario}/${password}"`)    
    LoginMethods.login(usuario,password)

    Logger.verification(`The home page shold show "Welcome ${usuario}" text`)
    cy.get('a#nameofuser').should('contain.text',usuario)
  })
})