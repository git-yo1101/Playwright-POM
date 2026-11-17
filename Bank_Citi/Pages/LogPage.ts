import {Page,Locator} from '@playwright/test'

import { Bpage } from './Bpage'

export class LogPage extends Bpage
{
        readonly page:Page;
        readonly uname:Locator;
        readonly pass:Locator;
        readonly btn:Locator;

        constructor(page:Page)
        {
            super(page);
            this.page=page;
            this.uname = page.locator("");
            this.pass = page.locator("");
            this.btn = page.locator("");

        }

        async loginto (uname:string, pass:string)
        {
            await this.uname.fill(uname);
            await this.pass.fill(pass);
            await this.btn.click();

        }

    }