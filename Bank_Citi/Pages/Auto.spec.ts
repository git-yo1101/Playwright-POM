import { test,Page } from "@playwright/test";
import { MyLogin } from "./LoginTo";

test('myTest', async({page})=>
{
    const login = new MyLogin(page);
    await login.goto("https://practicetestautomation.com/practice-test-login/")
    await login.LoginAuto("student","Password123")
})