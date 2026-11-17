import { Locator, Page } from "@playwright/test";
import { basePage } from "./basePage";

export class LoginPage extends basePage
{
    readonly page:Page;
    readonly username:Locator;
    password:Locator;
    clickbtn:Locator;

    constructor(page:Page)
    {
        super(page);

        this.page=page;
        this.username = page.locator("form.oxd-form").locator("input[name='username']");
        this.password = page.getByPlaceholder("Password");
        this.clickbtn = page.locator("button[type='submit']");

    }
    async signup(username:string, password:string)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.clickbtn.click();
    }
}
