const { Given, When, Then } = require('@cucumber/cucumber');

When('I click in button pages', async function () {
    let element = await this.driver.$('[data-test-nav="pages"]');
    return await element.click();
})

When('I click new page', async function () {
    let element = await this.driver.$('[data-test-new-page-button]');
    return await element.click();
})


When('I enter title {string}', async function (title) {
    let element = await this.driver.$('.gh-editor-title');
    return await element.setValue(title);
});

When('I press Enter', async function () {
    let element = await this.driver.$('.gh-editor-title');
    return await element.keys('Enter');
});

When('I enter body text {string}', async function (body) {
    let element = await this.driver.$('.pointer-events-none.absolute.left-0.top-0.min-w-full.cursor-text.font-serif.text-xl.text-grey-500.dark\\:text-grey-800');
    return await element.setValue(body);
});

When('I click back', async function () {
    let element = await this.driver.$('.kg-prose');
    return await element.click();
})

When('I click publish', async function () {
    let element = await this.driver.$('.gh-publish-trigger');
    return await element.click();
})

When('I click in continue final review', async function () {
    let element = await this.driver.$(".gh-publish-cta");
    return await element.click();
})

When('I click in confirm publish', async function () {
    let element = await this.driver.$(".gh-publish-cta");
    return await element.click();
})

When('I click in close', async function () {
    let element = await this.driver.$(".close");
    return await element.click();
})


Then('I should be logged into Ghost', async function () {
    const dashboardHeader = await this.driver.$('h2.gh-canvas-title');
    const headerText = await dashboardHeader.getText();
    expect(headerText).to.include('Dashboard');
});