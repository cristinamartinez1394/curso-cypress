import { CartElements } from "./cart.elements";

export class CartMethods {
    static clickOnDeleteLink(prductname){
        CartElements.links.delete(prductname).click();
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }
}