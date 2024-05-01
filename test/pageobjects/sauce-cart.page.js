import { $ } from '@wdio/globals'

class sauceCartPage {

    get checkoutButton(){

        return $('#checkout')


    }

    async validateOnPage(){
        await expect(this.checkoutButton).toHaveText("Checkout")
    }

}

export default new sauceCartPage();