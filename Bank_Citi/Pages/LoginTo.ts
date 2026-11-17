import { Locator, Page } from "@playwright/test";

import { MyBasePage } from "./MyBasePage";

export class MyLogin extends MyBasePage
{
    readonly page:Page;
    readonly uname:Locator;
    readonly pass:Locator;
    readonly btn:Locator;

    constructor(page:Page)
    {
        super(page);

        this.page=page;
        this.uname = page.locator("input#username");
        this.pass = page.locator("input#password");
        this.btn = page.locator("button#submit");
    }

    async LoginAuto (uname:string, pass:string)
    {
        await this.uname.fill(uname);
        await this.pass.fill(pass);
        await this.btn.click();
    }
}