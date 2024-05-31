import { HomeElements } from "./home.elements";

export class HomeMethods{
  static clickOPhonesOption(){
    HomeElements.categoriesMenu.phones.click();
  }

  static clickOnLaptopsOption(){
    HomeElements.categoriesMenu.laptops.click();
  }

  static clickOnMonitorsOption(){
    HomeElements.categoriesMenu.monitors.click();
  }
  
  static clickOnProductLink(productName){
    HomeElements.product(productName).click();
  }

  static verifyProductDisplayed(productName){
    HomeElements.product(productName).should('be.visible')
  }
}