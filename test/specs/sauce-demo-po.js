import sauceCartPage from "../pageobjects/sauce-cart.page.js";
import sauceDashboardPage from "../pageobjects/sauce-dashboard.page.js";
import sauceLoginPage from "../pageobjects/sauce-login.page.js";



describe('Page Object Demo on SauceLabs', () => {
   it('Test Case 1 - Success Login', async () => {
        await sauceLoginPage.open();
        await sauceLoginPage.login("standard_user", "secret_sauce");
        await sauceDashboardPage.validateOnPage();
        await sauceDashboardPage.clickCartButton();
        await sauceCartPage.validateOnPage();

    });
});