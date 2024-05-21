import { CartElements } from "./cart.elements";

export class CartMethods {
    static clickOnDeleteLink(prductname){
        CartElements.links.delete(prductname).click();
    }
}