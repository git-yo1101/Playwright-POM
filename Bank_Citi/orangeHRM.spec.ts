import test, { Page } from "@playwright/test";

import { LoginPage } from "./Pages/LoginPage";

test('HRM login', async({page})=>
    {

        const login = new LoginPage(page);
        await login.navigate("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await login.signup("Admin","admin123")
    })