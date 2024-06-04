import { CommonPageMethods } from "../common-page/common-page.methods";
import { ProductDetailsElements } from "./product-details.methods";

export class ProdcutsDetailsMethods{
    static clickOnAddToCartbutton(){
        ProductDetailsElements.buttons.addToCart.click();
    }

    static verifyProductDetailsPageDisplayed(){
        ProductDetailsElements.buttons.addToCart.should('be.visible')
    }

    static verifyProductAddedMessage(){
        CommonPageMethods.verifyAlert('Product added.')
    }
}