import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { Logger } from "../util/logger";
import { LoginMethods } from "../pages/login/login.methods";
import { LoginData } from "../pages/login/login.data";

describe(CommonPageData.testSuites.autenticacion, ()=>{
    it('Inicio de sesion válido', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoblaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación')
        CommonPageMethods.clicknLoginOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseñas válidos')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para inciar sesion')
        LoginMethods.clickOnloginButton();
        Logger.verification('Verificar que se redirige al usuario a la página de inicio')
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username)
    })
})