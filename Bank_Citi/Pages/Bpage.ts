import{Page, test} from '@playwright/test'

export class Bpage
{
    constructor(protected page:Page)
    {
        this.page=page;
    }

    async goto(url:string)
    {
        await this.page.goto(url);
    }

    async waitfroLoad()
    {
        await this.page.waitForLoadState();
    }
}