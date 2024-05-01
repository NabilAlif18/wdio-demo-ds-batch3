import { $ } from '@wdio/globals'

class sauceDashboardPage{

    get CheckoutButton(){

        return $('#add-to-cart-sauce-labs-backpack')

    }
    get cartButton(){
        return $('#add-to-cart-sauce-labs-backpack"]')
    }

    async validateOnPage(){
        await expect(this.CheckoutButton).toHaveText("add to cart")
    }

    async clickCartButton(){
        await this.cartButton.click()
    }
    

}
export default new sauceDashboardPage();