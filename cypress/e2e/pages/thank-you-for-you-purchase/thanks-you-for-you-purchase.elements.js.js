import { ThanksYouForYouPurchaseElements } from "./thank-you-for-you-purchase.methods";

export class ThanksYouForYouPurchaseMethods{
    static clicOnOkButton(){
        cy.wait(1000)
        ThanksYouForYouPurchaseElements.buttons.ok.click()
    }
    static verifyGreenCheckMarkIsDisplayed(){
        ThanksYouForYouPurchaseElements.icons.greenCheckMark.should("exist")
    }
    
}