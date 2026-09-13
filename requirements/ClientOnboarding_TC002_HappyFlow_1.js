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
    await targetPage.goto('https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD?pzuiactionrrr=CXtpbn10LzZxdDFCemFBZXNpWGhsdU9URFJhNmIrc2pkL2Rjc3dTZllMM3JCYUoreGRoUUxYWmNhT24yVUdxK3dFQVA3MFZrcVJESnZkVmhrSjVuSVB3c1ZET0tkeXFvUEE3RGJ4akduRkJjVzNTbENna1owTjlIQnp1NkRrdXVFOXNRUUpiK1IxRUpVeDU3MFNzbnFoSW5vT1p6UkpVL2tUR1YySXhVNXZlM091aDg9*');
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
        targetPage.locator('::-p-aria(Log in) >>>> ::-p-aria([role=\\"generic\\"])'),
        targetPage.locator('#submit_row span'),
        targetPage.locator('::-p-xpath(//*[@id=\\"sub\\"]/span)'),
        targetPage.locator(':scope >>> #submit_row span')
    ])
        .setTimeout(timeout)
        .on('action', () => startWaitingForEvents())
        .click({
          offset: {
            x: 3.594879150390625,
            y: 17.666656494140625,
          },
        });
    await Promise.all(promises);
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Create[role=\\"button\\"]) >>>> ::-p-aria([role=\\"none\\"])'),
        targetPage.locator('div.sc-fTrzCy svg'),
        targetPage.locator('::-p-xpath(//*[@id=\\"root-container\\"]/div/nav/div[1]/div[1]/ul/li/button/div/span/svg)'),
        targetPage.locator(':scope >>> div.sc-fTrzCy svg')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 5.384258270263672,
            y: 15.555549621582031,
          },
        });
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
            x: 4.5208282470703125,
            y: 9.013885498046875,
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
        .fill('Client T');
}
{
    const targetPage = page;
    await targetPage.keyboard.up('t');
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
        .fill('Client Test O');
}
{
    const targetPage = page;
    await targetPage.keyboard.up('o');
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
        .fill('Client Test Onboarding');
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
            x: 204.59487915039062,
            y: 4.4120330810546875,
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
        targetPage.locator('::-p-xpath(//*[@id=\\"_pw8xta62r-combobox\\"]/div/button)'),
        targetPage.locator(':scope >>> body > div div:nth-of-type(3) button')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 15.32635498046875,
            y: 25.84649658203125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator("[data-testid='abhinav\\.n\\.mishra\\@accenture\\.com\\:menu-item\\:'] span"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":summary-item:primary\\"]/span)'),
        targetPage.locator(":scope >>> [data-testid='abhinav\\.n\\.mishra\\@accenture\\.com\\:menu-item\\:'] span")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 95.45138549804688,
            y: 10.856475830078125,
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
            x: 15.52545166015625,
            y: 13.95831298828125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Consent)'),
        targetPage.locator('#_3vacgvufl'),
        targetPage.locator('::-p-xpath(//*[@id=\\"_3vacgvufl\\"])'),
        targetPage.locator(':scope >>> #_3vacgvufl')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 15.52545166015625,
            y: 12.974517822265625,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('div:nth-of-type(5) button'),
        targetPage.locator('::-p-xpath(//*[@id=\\"_w96sr5y1f-combobox\\"]/div/button)'),
        targetPage.locator(':scope >>> div:nth-of-type(5) button')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 9.32635498046875,
            y: 14.2767333984375,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator("[data-testid='\\39 8a5fc3e-0263-48c0-b3ca-bd36a6cb17e2\\:menu-item\\:'] span"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":summary-item:primary\\"]/span)'),
        targetPage.locator(":scope >>> [data-testid='\\39 8a5fc3e-0263-48c0-b3ca-bd36a6cb17e2\\:menu-item\\:'] span"),
        targetPage.locator('::-p-text(Kenji Nakamura)')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 87.45138549804688,
            y: 8.574066162109375,
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
            x: 41.69207763671875,
            y: 14.533172607421875,
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
            x: 54.9305419921875,
            y: 10.994598388671875,
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
            x: 15.9814453125,
            y: 8.474533081054688,
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
            x: 14.138885498046875,
            y: 12.6689453125,
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
            x: 14.138885498046875,
            y: 11.685150146484375,
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
            x: 40.15045166015625,
            y: 4.99072265625,
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
            x: 30.9814453125,
            y: 14.474533081054688,
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
            x: 32.15045166015625,
            y: 17.4351806640625,
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
            x: 25.9814453125,
            y: 13.474533081054688,
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
            x: 40.15045166015625,
            y: 8.4351806640625,
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
            x: 28.9814453125,
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
            x: 65.15045166015625,
            y: 20.07867431640625,
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
            x: 28.9814453125,
            y: 16.474533081054688,
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
            x: 196.01619720458984,
            y: 20.972213745117188,
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
            x: 14.15045166015625,
            y: 12.461822509765625,
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
            x: 10.9814453125,
            y: 15.474533081054688,
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
            x: 365.01619720458984,
            y: 17.861083984375,
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
            x: 42.15045166015625,
            y: 13.902740478515625,
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
            x: 23.9814453125,
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
            x: 50.69671630859375,
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
            x: 26.9814453125,
            y: 10.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator("[data-testid='column-count-2'] > div:nth-of-type(1) div:nth-of-type(3) [data-testid='\\:checkbox\\:label'] > div"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":checkbox:label\\"]/div)'),
        targetPage.locator(":scope >>> [data-testid='column-count-2'] > div:nth-of-type(1) div:nth-of-type(3) [data-testid='\\:checkbox\\:label'] > div")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 14.138885498046875,
            y: 9.127288818359375,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(SCRN-2026-07-15-KYC-001[role=\\"checkbox\\"])'),
        targetPage.locator("[data-testid='column-count-2'] > div:nth-of-type(1) div:nth-of-type(3) [data-testid='\\:checkbox\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":checkbox:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='column-count-2'] > div:nth-of-type(1) div:nth-of-type(3) [data-testid='\\:checkbox\\:control']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 14.138885498046875,
            y: 8.14349365234375,
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
            x: 17.15045166015625,
            y: 12.61572265625,
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
            x: 29.9814453125,
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
            x: 47.69671630859375,
            y: 12.634246826171875,
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
            x: 27.9814453125,
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
            x: 40.15045166015625,
            y: 21.754638671875,
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
            x: 44.9814453125,
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
            x: 62.69671630859375,
            y: 18.96295166015625,
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
            x: 31.9814453125,
            y: 9.474533081054688,
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
            x: 44.69671630859375,
            y: 13.96295166015625,
          },
        });
}

await browser.close();

