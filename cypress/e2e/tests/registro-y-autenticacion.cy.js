import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { SignupMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.registroYAutenticacion,()=>{
    it("Registro de usuario válido",()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoblaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign Up" en la barra de navegacion')
        CommonPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar los campos obligatorios con información válida')
        SignupMethods.insertUsername('testinguser1')
        SignupMethods.insertPassword('testinguser1')

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar el usuario')
        SignupMethods.clickOnSignupButton();
        cy.wait(5000)
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful."')
        SignupMethods.verifySignupSuccessfulMessageIsDisplayed();
     });
});