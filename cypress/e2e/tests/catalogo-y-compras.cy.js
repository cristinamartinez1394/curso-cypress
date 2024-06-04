import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { PlaceOrderData } from "../pages/place-order/place-order.data";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { ProdcutsDetailsMethods } from "../pages/product-details/product-details.elements";
import { ThanksYouForYouPurchaseMethods } from "../pages/thank-you-for-you-purchase/thanks-you-for-you-purchase.elements.js";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials.username
const password = LoginData.validCredentials.password
const product = 'ASUS Full HD'

describe(CommonPageData.testSuites.catalogoYCompras, ()=>{
    it('Navegacion por categorias',()=>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesion con un usuario registrado')
        Logger.subStep('Navegar a la aplicación Demoblaze')
        CommonPageMethods.navigateToDemoblaze()
        Logger.subStep('Clic en la opcion "Log in"')
        CommonPageMethods.clicknLoginOption();
        Logger.subStep('Ingresar las credenciales')
        LoginMethods.login(user,password);

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoria de productos en el menú de navegacion')
        HomeMethods.clickOnMonitorsOption();
        Logger.verification('Verificar que se muestre la lista de productos correspondiente a la categoria seleccionada')
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        HomeMethods.verifyProductDisplayed('ASUS Full HD')

        Logger.postCondition('Log out')
        CommonPageMethods.logOut();
        cy.wait(5000)
    })

    it('Agregar producto al carrito',()=>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesion con un usuario registrado')
        Logger.subStep('Navegar a la aplicación Demoblaze')
        CommonPageMethods.navigateToDemoblaze()
        Logger.subStep('Clic en la opcion "Log in"')
        CommonPageMethods.clicknLoginOption();
        Logger.subStep('Ingresar las credenciales')
        LoginMethods.login(user,password);

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoria de productos en el menú de navegacion')
        HomeMethods.clickOnMonitorsOption();
       
        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto especifico')
        HomeMethods.clickOnProductLink(product)
        Logger.verification('Verificar que se muestra la pagina de detalles del producto')
        ProdcutsDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(5)
        Logger.step('Hacer clic en el botón "Add to cart"')
        ProdcutsDetailsMethods.clickOnAddToCartbutton();

        Logger.stepNumber(6)
        Logger.verification('Verificar que se muestra un mensaje de confirmacion y el producto se agrega al carrito')
        ProdcutsDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)

        Logger.postCondition('Limpiar carrito y cerrar sesión')
        CartMethods.emptyCart(user,password)
        cy.wait(5000)
    })

    xit('Realizar una compra',()=>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesion con un usuario registrado')
        Logger.subStep('Navegar a la aplicación Demoblaze')
        CommonPageMethods.navigateToDemoblaze()
        Logger.subStep('Clic en la opcion "Log in"')
        CommonPageMethods.clicknLoginOption();
        Logger.subStep('Ingresar las credenciales')
        LoginMethods.login(user,password);

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoria de productos en el menú de navegacion')
        HomeMethods.clickOnMonitorsOption();
       
        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto especifico')
        HomeMethods.clickOnProductLink(product)
        Logger.verification('Verificar que se muestra la pagina de detalles del producto')
        ProdcutsDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(5)
        Logger.step('Hacer clic en el botón "Add to cart"')
        ProdcutsDetailsMethods.clickOnAddToCartbutton();

        Logger.stepNumber(6)
        Logger.verification('Verificar que se muestra un mensaje de confirmacion y el producto se agrega al carrito')
        ProdcutsDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)

        Logger.stepNumber(7)
        Logger.step('Hacer clic la opcion "Cart" en la barra de navegacion')
        CommonPageMethods.clickOnCartOption();

        Logger.stepNumber(8)
        Logger.verification('Verificar que se muestra la pagina del carrito de compras')
        CartMethods.verifyCartPageIsShown();

        Logger.stepNumber(9)
        Logger.step('Hacer Clic en el botón "Place order"')
        CartMethods.clickOnPlaceOrderButton();

        Logger.stepNumber(10)
        Logger.step('Completar los campos obligatorios en la página de información de envío')
        PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData);

        Logger.stepNumber(11)
        Logger.step('Hacer clic en el botón "Purchase"')
        PlaceOrderMethods.clickOnPurchaseButton();

        Logger.stepNumber(12)
        Logger.verification('Verificar que se muestra un mensaje de confirmacion y se redirige al usuario a la pagina de inicio ')
        ThanksYouForYouPurchaseMethods.verifyGreenCheckMarkIsDisplayed();
        cy.wait(3000)
        ThanksYouForYouPurchaseMethods.clicOnOkButton();
        HomeMethods.verifyHomePageIsShown();

        Logger.postCondition('Log out')
        CommonPageMethods.logOut();

    })
    
})