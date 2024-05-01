
import { browser } from '@wdio/globals'

describe('Demo Test Cases', () => {

    it('Test Case 1 - Success Login', async () => {

        await browser.url('https://www.saucedemo.com/')

        const username = await browser.$('#user-name')
        await username.clearValue()
        await username.setValue('standard_user')

        const password = await browser.$('#password')
        await password.clearValue()
        await password.setValue('secret_sauce')


        const loginbuttuon = await browser.$('#login-button')
        loginbuttuon.click()

       await browser.pause(1000)
        const checkout = await browser.$('#add-to-cart-sauce-labs-backpack')
        checkout.click()
        
       await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
       const shopingCart = await browser.$('//*[@id="shopping_cart_container"]/a/span')
       await expect(shopingCart).toBeDisplayed


        //(await browser.$('user-name')).setValue('Nabil Alif')

    })

    it('Test Case 2 - Failed Login', async () => {

        await browser.url('https://www.saucedemo.com/')
        const pageText = await browser.getElementText('body')

        const username = await browser.$('#user-name')
        await username.clearValue()
        await username.setValue('standard_user')

        const password = await browser.$('#password')
        await password.clearValue()
        await password.setValue('salah')


        const loginbuttuon = await browser.$('#login-button')
        loginbuttuon.click()
        expect(pageText).toHaveText(expect.stringContaining('Epic sadface: Username and password do not match any user in this service'))


       await browser.pause(5000)

        //(await browser.$('user-name')).setValue('Nabil Alif')

    })

})