import {Page} from '@playwright/test'

export class MyBasePage
{
    constructor(protected page:Page)
    {
        this.page=page;
    }

    async goto(url:string)
    {
        await this.page.goto(url);
    }

    async waitForLoad()
    {
        await this.page.waitForLoadState('load');
    }
}