import { PlaceOrderData } from "./place-order.data";
import { placeOrderElements } from "./place-order.elements";

export class PlaceOrderMethods{
    static insertName(name){
        placeOrderElements.textboxes.name.invoke('val',name)
    }

    static insertCountry(country){
        placeOrderElements.textboxes.country.invoke('val',country)
    }

    static insertCity(city){
        placeOrderElements.textboxes.city.invoke('val',city)
    }

    static insertCreditCard(creditCardNumber){
        placeOrderElements.textboxes.creditCard.invoke('val',creditCardNumber)
    }

    static insertMonth(month){
        placeOrderElements.textboxes.month.invoke('val',month)
    }

    static clickOnCloseButton(){
        placeOrderElements.buttons.close.click()
    }

    static clickOnPurchaseButton(){
        placeOrderElements.buttons.purchase.click()
    }

    static insertYear(year){
        placeOrderElements.textboxes.year.invoke('val',year)
    }

    static insertOrderInformation(data){
        this.insertName(data.name)
        this.insertCountry(data.country)
        this.insertCity(data.city)
        this.insertCreditCard(data.creditCardNumber)
        this.insertMonth(data.month)
        this.insertYear(data.year)
    }
}