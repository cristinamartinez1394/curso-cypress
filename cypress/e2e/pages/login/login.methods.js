import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val',username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val',password)
    }

    static clickOnloginButton(){
        LoginElements.buttons.login.click()
    }

    static login(username,password){
        Logger.subStep('Insert Username')
        this.insertUsername(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on Login button')
        this.clickOnloginButton()
    }

    static verifiWrongPasswordMessage(){
        CommonPageMethods.verifyAlert('Wrong passwrd.')
    }
}