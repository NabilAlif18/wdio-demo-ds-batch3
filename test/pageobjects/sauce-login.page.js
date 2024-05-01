import { $, browser } from '@wdio/globals';

class SauceLoginPage {

    get username(){
        return $('#user-name');
    }

    get password(){
        return $('#password');
    }

    get loginButton(){
        return $('#login-button');
    }

    async inputUser(username){
        await this.username.setValue(username);
    }

    async inputPassword(password){
        await this.password.setValue(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async login(username, password){
        await this.inputUser(username);
        await this.inputPassword(password);
        await this.clickLoginButton();
    }

    async open(){
        await browser.url('https://www.saucedemo.com/');
    }
}

export default new SauceLoginPage();