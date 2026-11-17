import { Page,expect } from "@playwright/test";
export class basePage


    {
        constructor (protected page : Page)
        {
            this.page = page;
        }
        async navigate(url:string)
        {
            await this.page.goto(url);
        }
        async waitForPageLoad()
        {
            await this.page.waitForLoadState('load');
        }
    }