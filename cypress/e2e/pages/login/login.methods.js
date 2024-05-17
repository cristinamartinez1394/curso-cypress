import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.type(username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.type(password)
    }

    static clickOnloginButton(){
        LoginElements.buttons.login.click()
    }

    static login(username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnloginButton()
    }
}