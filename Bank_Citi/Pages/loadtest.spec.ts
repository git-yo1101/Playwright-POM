import { test,expect } from "@playwright/test";
import { LogPage } from "./LogPage";
import { LoginPage } from "./LoginPage";

test('mytest', async({page})=>
    {

        await page.goto("");

        const login = new LogPage(page);
        
        await login.loginto("","");

    })