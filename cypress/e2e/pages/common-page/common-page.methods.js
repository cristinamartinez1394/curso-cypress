import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    static navigateToDemoblaze(){
        cy.visit(CommonPageData.url);
    }

    static clicOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }

    static clicOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }

    static clicOnAboutUsOption(){
        CommonPageElements.topMenu.aboutUs.click();
    }

    static clicOnCartOption(){
        CommonPageElements.topMenu.cart.click();
    }

    static clicOnLoginOption(){
        CommonPageElements.topMenu.logIn.click();
    }

    static clicOnSignUpOption(){
        CommonPageElements.topMenu.signUp.click();
    }
}