import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods {
    static clickOnDeleteLink(prductname){
        CartElements.links.delete(prductname).click();
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }

    static verifyCartPageIsShown(){
        cy.url().should('include','cart.html')
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrdr.click()
    }

    static deleteProducts(){
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click()
            cy.wait(10000)
        })
    }

    static emptyCart(user,password){
        CommonPageMethods.navigateToDemoblaze()
        CommonPageMethods.logOut();
        CommonPageMethods.clicknLoginOption();
        LoginMethods.login(user,password);
        CommonPageMethods.clickOnCartOption();
        this.deleteProducts();

    }
}