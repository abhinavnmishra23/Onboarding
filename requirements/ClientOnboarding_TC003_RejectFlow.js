import { Locator, launch } from 'puppeteer'; // v25.0.0 or later

const browser = await launch();
const page = await browser.newPage();
const timeout = 5000;
page.setDefaultTimeout(timeout);

{
    const targetPage = page;
    await targetPage.setViewport({
        width: 922,
        height: 701
    })
}
{
    const targetPage = page;
    await targetPage.goto('https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD?pzuiactionrrr=CXtpbn10LzZxdDFCemFBZXNpWGhsdU9URFJhNmIrc2pkL2Rjc3dTZllMM3JCYUoreGRoUUxYWmNhT24yVUdxK3dFQVA3MFZrcVJESnZkVmhrSjVuSVB3c1ZESUp1ajUwOFZMTGU2UmgyS1NJYjdabHpUZHBpK0ZuTGpLODAyOExnM0tlMkhpVFJ5RnM1OEkwZnBNNWpodG95NGdLZXF5NE1tK2FDRTRzTUpFY253U3c9*');
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
        .click({
          offset: {
            x: 66.90045166015625,
            y: 30.259246826171875,
          },
        });
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
        .fill('rules@345');
}
{
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
        promises.push(targetPage.waitForNavigation());
    }
    await targetPage.keyboard.down('Enter');
    await Promise.all(promises);
}
{
    const targetPage = page;
    await targetPage.keyboard.up('Enter');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Create[role=\\"button\\"]) >>>> ::-p-aria([role=\\"none\\"])'),
        targetPage.locator('div.sc-leZLoi svg'),
        targetPage.locator('::-p-xpath(//*[@id=\\"root-container\\"]/div/nav/div[1]/div[1]/ul/li/button/div/span/svg)'),
        targetPage.locator(':scope >>> div.sc-leZLoi svg')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 2.9398136138916016,
            y: 6.555549621582031,
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
            x: 24.446754455566406,
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
        .fill('Client O');
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
        .fill('Client Onboarding test');
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
            x: 60.89117431640625,
            y: 23.412033081054688,
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
        .fill('Branch Assisted');
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('body > div div:nth-of-type(3) button'),
        targetPage.locator('::-p-xpath(//*[@id=\\"_58y9zqa0y-combobox\\"]/div/button)'),
        targetPage.locator(':scope >>> body > div div:nth-of-type(3) button')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 9.622650146484375,
            y: 15.846221923828125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator("[data-testid='abhinav\\.n\\.mishra\\@accenture\\.com\\:menu-item\\:'] [data-testid='\\:meta-list\\:']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":meta-list:\\"])'),
        targetPage.locator(":scope >>> [data-testid='abhinav\\.n\\.mishra\\@accenture\\.com\\:menu-item\\:'] [data-testid='\\:meta-list\\:']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 150.9097137451172,
            y: 2.731475830078125,
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
            x: 16.821746826171875,
            y: 13.95831298828125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Consent)'),
        targetPage.locator('#_ln8idjko0'),
        targetPage.locator('::-p-xpath(//*[@id=\\"_ln8idjko0\\"])'),
        targetPage.locator(':scope >>> #_ln8idjko0')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 16.821746826171875,
            y: 12.974517822265625,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('div:nth-of-type(5) button'),
        targetPage.locator('::-p-xpath(//*[@id=\\"_lfubjxk9v-combobox\\"]/div/button)'),
        targetPage.locator(':scope >>> div:nth-of-type(5) button')
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 12.622650146484375,
            y: 14.2769775390625,
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
            x: 31.1180419921875,
            y: 2.574066162109375,
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
            x: 25.9884033203125,
            y: 16.540374755859375,
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
            x: 50.226806640625,
            y: 23.975677490234375,
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
            x: 41.9814453125,
            y: 10.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator("div.bContainer > div > div:nth-of-type(1) [data-testid='\\:checkbox\\:label'] > div"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":checkbox:label\\"]/div)'),
        targetPage.locator(":scope >>> div.bContainer > div > div:nth-of-type(1) [data-testid='\\:checkbox\\:label'] > div")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 9.138885498046875,
            y: 5.655059814453125,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Utility Bill - Address Confirmation[role=\\"checkbox\\"])'),
        targetPage.locator("div.bContainer > div > div:nth-of-type(1) [data-testid='\\:checkbox\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":checkbox:control\\"])'),
        targetPage.locator(":scope >>> div.bContainer > div > div:nth-of-type(1) [data-testid='\\:checkbox\\:control']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 9.138885498046875,
            y: 4.6712646484375,
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
            x: 41.15045166015625,
            y: 6.99072265625,
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
            x: 21.9814453125,
            y: 11.474533081054688,
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
            x: 27.15045166015625,
            y: 16.461669921875,
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
            x: 24.9814453125,
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
            x: 34.15045166015625,
            y: 12.4351806640625,
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
            y: 16.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator("[data-testid='column-count-2'] > div:nth-of-type(1) div.bContainer > div > div:nth-of-type(2) [data-testid='\\:checkbox\\:label'] > div"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":checkbox:label\\"]/div)'),
        targetPage.locator(":scope >>> [data-testid='column-count-2'] > div:nth-of-type(1) div.bContainer > div > div:nth-of-type(2) [data-testid='\\:checkbox\\:label'] > div")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 9.138885498046875,
            y: 10.1226806640625,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(DOC-DEFICIENCY-7834[role=\\"checkbox\\"])'),
        targetPage.locator("[data-testid='column-count-2'] > div:nth-of-type(1) div.bContainer > div > div:nth-of-type(2) [data-testid='\\:checkbox\\:control']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":checkbox:control\\"])'),
        targetPage.locator(":scope >>> [data-testid='column-count-2'] > div:nth-of-type(1) div.bContainer > div > div:nth-of-type(2) [data-testid='\\:checkbox\\:control']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 9.138885498046875,
            y: 9.138885498046875,
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
            x: 55.15045166015625,
            y: 14.96759033203125,
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
            x: 18.9814453125,
            y: 9.474533081054688,
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
            x: 353.01619720458984,
            y: 9.861083984375,
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
        .fill('I');
}
{
    const targetPage = page;
    await targetPage.keyboard.up('i');
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
        .fill('Insufficient data');
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
            x: 30.15045166015625,
            y: 17.101806640625,
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
            x: 19.9814453125,
            y: 12.474533081054688,
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
            x: 371.01619720458984,
            y: 11.861083984375,
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
        .fill('Rejected');
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
            x: 31.15045166015625,
            y: 9.902740478515625,
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
            x: 20.9814453125,
            y: 7.4745330810546875,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Reject)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:reject']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:reject\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:reject']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 38.914306640625,
            y: 17.970977783203125,
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
            x: 26.9814453125,
            y: 15.474533081054688,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Reject)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:reject']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:reject\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:reject']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 35.914306640625,
            y: 11.96295166015625,
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
            x: 361.01619720458984,
            y: 16.673583984375,
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
            x: 361.01619720458984,
            y: 16.673583984375,
          },
        });
}
{
    const targetPage = page;
    await Locator.race([
        targetPage.locator('::-p-aria(Reject)'),
        targetPage.locator("[data-testid='\\:assignment-action-buttons\\:reject']"),
        targetPage.locator('::-p-xpath(//*[@data-testid=\\":assignment-action-buttons:reject\\"])'),
        targetPage.locator(":scope >>> [data-testid='\\:assignment-action-buttons\\:reject']")
    ])
        .setTimeout(timeout)
        .click({
          offset: {
            x: 40.914306640625,
            y: 10.688232421875,
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
            x: 27.69671630859375,
            y: 13.695465087890625,
          },
        });
}

await browser.close();

