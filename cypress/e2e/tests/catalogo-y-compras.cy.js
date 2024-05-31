import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProdcutsDetailsMethods } from "../pages/product-details/product-details.elements";
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
    })
    
})