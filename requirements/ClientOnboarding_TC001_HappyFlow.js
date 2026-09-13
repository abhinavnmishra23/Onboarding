import { Locator, launch } from 'puppeteer'; // v25.0.0 or later

const browser = await launch();
const page = await browser.newPage();
const timeout = 5000;
page.setDefaultTimeout(timeout);

{
    const targetPage = page;
    await targetPage.setViewport({
        width: 805,
        height: 701
    })
}
{
    const targetPage = page;
    await targetPage.goto('https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD?pzuiactionrrr=CXtpbn10LzZxdDFCemFBZXNpWGhsdU9URFJhNmIrc2pkL2Rjc3dTZllMM3JCYUoreGRoUUxYWmNhT24yVUdxK3dFQVA3TVYxZmdMYXlTbnNtaHhaWitHblErVFRtVXJtYW5HVitrdUZXRjlYY0tsQmo5c290YkZ6bVM3Uis1VDFrcXJLRg%3D%3D*');
}
{
    const targetPage = page;
    await targetPage.goto('https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD?pzuiactionrrr=CXtpbn10LzZxdDFCemFBZXNpWGhsdU9URFJhNmIrc2pkL2Rjc3dTZllMM3JCYUoreGRoUUxYWmNhT24yVUdxK3dFQVA3MFZrcVJESnZkVmhrSjVuSVB3c1ZET0tkeXFvUEE3RGJ4akduRkJjVzNTbENna1owTjlIQnp1NkRrdXVFOXNRUUpiK1IxRUpVeDU3MFNzbnFoSW5vT1p6UkpVL2tUR1YySXhVNXZlM091aDg9*');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(User name *)'),
        targetPage.locator('#txtUserID'),
        targetPage.locator('::-p-xpath(//*[@id=\\"txtUserID\\"])'),
        targetPage.locator(':scope >>> #txtUserID')
    ])
        .setTimeout(timeout)
        .fill('abhinav.n.mishra@accenture.com');
}
{
    const targetPage = page;
    await targetPage.keyboard.down('Tab');
}
{
    const targetPage = page;
    await targetPage.keyboard.up('Tab');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Password *)'),
        targetPage.locator('#txtPassword'),
        targetPage.locator('::-p-xpath(//*[@id=\\"txtPassword\\"])'),
        targetPage.locator(':scope >>> #txtPassword')
    ])
        .setTimeout(timeout)
        .fill('rules@');
}
{
    const targetPage = page;
    await targetPage.keyboard.up('2');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Password *)'),
        targetPage.locator('#txtPassword'),
        targetPage.locator('::-p-xpath(//*[@id=\\"txtPassword\\"])'),
        targetPage.locator(':scope >>> #txtPassword')
    ])
        .setTimeout(timeout)
        .fill('rules@234');
}
{
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
        promises.push(targetPage.waitForNavigation());
    }
    await Locator.race([
        targetPage.locator('::-p-aria(Log in)'),
        targetPage.locator('#sub'),
        targetPage.locator('::-p-xpath(//*[@id=\\"sub\\"])'),
        targetPage.locator(':scope >>> #sub')
    ])
        .setTimeout(timeout)
        .on('action', () => startWaitingForEvents())
        .click({
          offset: {
            x: 187.0370330810547,
            y: 29.28472900390625,
          },
        });
    await Promise.all(promises);
}
{
    const targetPage = page;
    await waitForElement({
        type: 'waitForElement',
        selectors: [
            'body'
        ]
    }, targetPage, timeout);
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator("html > body > div > [data-testid='\\:menu\\:'] > div > fieldset > ul > [data-testid='\\:menu-item\\:'] span"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":summary-item:primary\\"]/span)'),
        targetPage.locator(":scope >>> html > body > div > [data-testid='\\:menu\\:'] > div > fieldset > ul > [data-testid='\\:menu-item\\:'] span")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 11.446754455566406,
            y: 6.013885498046875,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Client onboarding case name)'),
        targetPage.locator("[data-testid='Client\\ onboarding\\ case\\ name\\:input\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\"Client onboarding case name:input:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='Client\\ onboarding\\ case\\ name\\:input\\:control']")
    ])
        .setTimeout(timeout)
        .fill('C');
}
{
    const targetPage = page;
    await targetPage.keyboard.up('c');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Client onboarding case name)'),
        targetPage.locator("[data-testid='Client\\ onboarding\\ case\\ name\\:input\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\"Client onboarding case name:input:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='Client\\ onboarding\\ case\\ name\\:input\\:control']")
    ])
        .setTimeout(timeout)
        .fill('Client test');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Onboarding channel)'),
        targetPage.locator("[data-testid='Onboarding\\ channel\\:select\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\"Onboarding channel:select:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='Onboarding\\ channel\\:select\\:control']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 267.0393371582031,
            y: 17.412033081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Onboarding channel)'),
        targetPage.locator("[data-testid='Onboarding\\ channel\\:select\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\"Onboarding channel:select:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='Onboarding\\ channel\\:select\\:control']")
    ])
        .setTimeout(timeout)
        .fill('Digital');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('body > div div:nth-of-type(3) button'),
        targetPage.locator('::-p-xpath(//*[@id=\\"_w7h79eb82-combobox\\"]/div/button)'),
        targetPage.locator(':scope >>> body > div div:nth-of-type(3) button')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 21.77081298828125,
            y: 13.760345458984375,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator("[data-testid='\\:checkbox\\:label'] > div"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":checkbox:label\\"]/div)'),
        targetPage.locator(":scope >>> [data-testid='\\:checkbox\\:label'] > div")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 9.969902038574219,
            y: 9.95831298828125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Consent)'),
        targetPage.locator('#_w6suk2uc1'),
        targetPage.locator('::-p-xpath(//*[@id=\\"_w6suk2uc1\\"])'),
        targetPage.locator(':scope >>> #_w6suk2uc1')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 9.969902038574219,
            y: 8.974517822265625,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('div:nth-of-type(5) button'),
        targetPage.locator('::-p-xpath(//*[@id=\\"_1biz3kpyd-combobox\\"]/div/button)'),
        targetPage.locator(':scope >>> div:nth-of-type(5) button')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 20.77081298828125,
            y: 9.27667236328125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator("[data-testid='\\39 8a5fc3e-0263-48c0-b3ca-bd36a6cb17e2\\:menu-item\\:'] [data-testid='\\:summary-item\\:primary']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":summary-item:primary\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\39 8a5fc3e-0263-48c0-b3ca-bd36a6cb17e2\\:menu-item\\:'] [data-testid='\\:summary-item\\:primary']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 102.89582824707031,
            y: 7.574066162109375,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Next)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 28.13653564453125,
            y: 12.533172607421875,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Submit)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 50.375,
            y: 3.96759033203125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Enter Profile Details)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 20.27777099609375,
            y: 15.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator("div.sc-gbPaaa div:nth-of-type(4) [data-testid='\\:checkbox\\:label'] > div"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":checkbox:label\\"]/div)'),
        targetPage.locator(":scope >>> div.sc-gbPaaa div:nth-of-type(4) [data-testid='\\:checkbox\\:label'] > div")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 10.138885498046875,
            y: 10.6689453125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Driver License - Address Verification[role=\\"checkbox\\"])'),
        targetPage.locator("div:nth-of-type(4) [data-testid='\\:checkbox\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":checkbox:control\\"])'),
        targetPage.locator(":scope >>> div:nth-of-type(4) [data-testid='\\:checkbox\\:control']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 10.138885498046875,
            y: 9.685150146484375,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Submit)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 50.44671630859375,
            y: 21.10186767578125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Capture Document Details)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 37.27777099609375,
            y: 9.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Submit)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 61.44671630859375,
            y: 13.4351806640625,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Upload Documents)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 13.27777099609375,
            y: 16.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Submit)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 37.44671630859375,
            y: 17.4351806640625,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Record Discrepancy)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 31.27777099609375,
            y: 12.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Submit)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 67.44671630859375,
            y: 2.96759033203125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Route Rework Request)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 20.27777099609375,
            y: 19.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Decision reason)'),
        targetPage.locator("[data-testid='Decision\\ reason\\:input\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\"Decision reason:input:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='Decision\\ reason\\:input\\:control']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 195.01619720458984,
            y: 18.861083984375,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Decision reason)'),
        targetPage.locator("[data-testid='Decision\\ reason\\:input\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\"Decision reason:input:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='Decision\\ reason\\:input\\:control']")
    ])
        .setTimeout(timeout)
        .fill('A');
}
{
    const targetPage = page;
    await targetPage.keyboard.up('a');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Decision reason)'),
        targetPage.locator("[data-testid='Decision\\ reason\\:input\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\"Decision reason:input:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='Decision\\ reason\\:input\\:control']")
    ])
        .setTimeout(timeout)
        .fill('All O');
}
{
    const targetPage = page;
    await targetPage.keyboard.up('o');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Decision reason)'),
        targetPage.locator("[data-testid='Decision\\ reason\\:input\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\"Decision reason:input:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='Decision\\ reason\\:input\\:control']")
    ])
        .setTimeout(timeout)
        .fill('All Okay');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Submit)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 46.44671630859375,
            y: 6.324066162109375,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Submit Reworked Case)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 35.27777099609375,
            y: 11.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Final approval decision)'),
        targetPage.locator("[data-testid='Final\\ approval\\ decision\\:select\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\"Final approval decision:select:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='Final\\ approval\\ decision\\:select\\:control']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 306.01619720458984,
            y: 20.861083984375,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Final approval decision)'),
        targetPage.locator("[data-testid='Final\\ approval\\ decision\\:select\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\"Final approval decision:select:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='Final\\ approval\\ decision\\:select\\:control']")
    ])
        .setTimeout(timeout)
        .fill('Approved');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Submit)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 58.44671630859375,
            y: 2.902740478515625,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Get Approval)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 35.27777099609375,
            y: 8.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Approve)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 39.9930419921875,
            y: 11.96295166015625,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Review Screening Alerts)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 24.27777099609375,
            y: 16.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator("[data-testid='column-count-2'] > div:nth-of-type(1) div:nth-of-type(5) [data-testid='\\:checkbox\\:label'] > div"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":checkbox:label\\"]/div)'),
        targetPage.locator(":scope >>> [data-testid='column-count-2'] > div:nth-of-type(1) div:nth-of-type(5) [data-testid='\\:checkbox\\:label'] > div")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 14.138885498046875,
            y: 8.506927490234375,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Customer Onboarding Screen REF-89234[role=\\"checkbox\\"])'),
        targetPage.locator("[data-testid='column-count-2'] > div:nth-of-type(1) div:nth-of-type(5) [data-testid='\\:checkbox\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":checkbox:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='column-count-2'] > div:nth-of-type(1) div:nth-of-type(5) [data-testid='\\:checkbox\\:control']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 14.138885498046875,
            y: 7.52313232421875,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Submit)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 50.44671630859375,
            y: 16.616455078125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Get Approval)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 38.27777099609375,
            y: 13.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Approve)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 64.9930419921875,
            y: 23.634246826171875,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Display Case Summary)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 25.27777099609375,
            y: 10.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Submit)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 33.44671630859375,
            y: 17.754638671875,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Get Approval)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 19.27777099609375,
            y: 7.4745330810546875,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Approve)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 50.9930419921875,
            y: 19.96295166015625,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Go - Get Approval)'),
        targetPage.locator("[data-testid='\\:assignment\\:action']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment:action\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment\\:action']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 21.27777099609375,
            y: 5.4745330810546875,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Approve)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:submit']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:submit\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:submit']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 40.9930419921875,
            y: 15.96295166015625,
          },
        });
}

await browser.close();

async function waitForElement(step, frame, timeout) {
  const {
    count = 1,
    operator = '>=',
    visible = true,
    properties,
    attributes,
  } = step;
  const compFn = {
    '==': (a, b) => a === b,
    '>=': (a, b) => a >= b,
    '<=': (a, b) => a <= b,
  }[operator];
  await waitForFunction(async () => {
    const elements = await querySelectorsAll(step.selectors, frame);
    let result = compFn(elements.length, count);
    const elementsHandle = await frame.evaluateHandle((...elements) => {
      return elements;
    }, ...elements);
    await Promise.all(elements.map((element) => element.dispose()));
    if (result && (properties || attributes)) {
      result = await elementsHandle.evaluate(
        (elements, properties, attributes) => {
          for (const element of elements) {
            if (attributes) {
              for (const [name, value] of Object.entries(attributes)) {
                if (element.getAttribute(name) !== value) {
                  return false;
                }
              }
            }
            if (properties) {
              if (!isDeepMatch(properties, element)) {
                return false;
              }
            }
          }
          return true;

          function isDeepMatch(a, b) {
            if (a === b) {
              return true;
            }
            if ((a && !b) || (!a && b)) {
              return false;
            }
            if (!(a instanceof Object) || !(b instanceof Object)) {
              return false;
            }
            for (const [key, value] of Object.entries(a)) {
              if (!isDeepMatch(value, b[key])) {
                return false;
              }
            }
            return true;
          }
        },
        properties,
        attributes
      );
    }
    await elementsHandle.dispose();
    return result === visible;
  }, timeout);
}

async function querySelectorsAll(selectors, frame) {
  for (const selector of selectors) {
    const result = await querySelectorAll(selector, frame);
    if (result.length) {
      return result;
    }
  }
  return [];
}

async function querySelectorAll(selector, frame) {
  if (!Array.isArray(selector)) {
    selector = [selector];
  }
  if (!selector.length) {
    throw new Error('Empty selector provided to querySelectorAll');
  }
  let elements = [];
  for (let i = 0; i < selector.length; i++) {
    const part = selector[i];
    if (i === 0) {
      elements = await frame.$$(part);
    } else {
      const tmpElements = elements;
      elements = [];
      for (const el of tmpElements) {
        elements.push(...(await el.$$(part)));
      }
    }
    if (elements.length === 0) {
      return [];
    }
    if (i < selector.length - 1) {
      const tmpElements = [];
      for (const el of elements) {
        const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        if (newEl) {
          tmpElements.push(newEl);
        }
      }
      elements = tmpElements;
    }
  }
  return elements;
}

async function waitForFunction(fn, timeout) {
  let isActive = true;
  const timeoutId = setTimeout(() => {
    isActive = false;
  }, timeout);
  while (isActive) {
    const result = await fn();
    if (result) {
      clearTimeout(timeoutId);
      return;
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error('Timed out');
}
