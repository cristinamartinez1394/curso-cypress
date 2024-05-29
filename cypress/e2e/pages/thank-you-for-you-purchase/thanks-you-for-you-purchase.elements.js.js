import { ThanksYouForYouPurchaseElements } from "./thank-you-for-you-purchase.methods";

export class ThanksYouForYouPurchaseMethods{
    static clicOnOkButton(){
        ThanksYouForYouPurchaseElements.buttons.ok.Click()
    }
    static verifyGreenCheckMarkIsDisplayed(){
        ThanksYouForYouPurchaseElements.icons.greenCheckMark.should("exist")
    }
    
}