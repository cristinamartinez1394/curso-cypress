import { placeOrderElements } from "./place-order.elements";

export class PlaceOrderMethods{
    static insertName(name){
        placeOrderElements.textboxes.name.invoke('val',name)
    }

    static insertCountry(country){
        placeOrderElements.textboxes.name.invoke('val',country)
    }

    static insertCity(city){
        placeOrderElements.textboxes.name.invoke('val',city)
    }

    static insertCreditCard(creditCardNumber){
        placeOrderElements.textboxes.name.invoke('val',creditCardNumber)
    }

    static insertMonth(month){
        placeOrderElements.textboxes.name.invoke('val',month)
    }

    static clickOnCloseButton(){
        placeOrderElements.buttons.close.click()
    }

    static clickOnPurchaseButton(){
        placeOrderElements.buttons.purchase.click()
    }

    static insertYear(year){
        placeOrderElements.textboxes.name.invoke('val',year)
    }
}