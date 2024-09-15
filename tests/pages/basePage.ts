import {Page, Locator} from '@playwright/test'

export default class BasePage{
    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    // Common Methods

    async navigateTo(url:string){
        await this.page.goto(url);
    }

    async clickElement(element:Locator){
        await element.click();
    }

    async enterValuesInElement(element:Locator, valuesToEnter:string){
        await element.fill(valuesToEnter);
    }
}