const { Given, When, Then } = require('@cucumber/cucumber');

Given('I navigate to {string}', async function (url) {
    await this.driver.url(url);
});

When('I enter the email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click login', async function () {
    let element = await this.driver.$('#ember5');
    return await element.click();
})

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

When('I click back', async function () {
    let element = await this.driver.$('.gh-editor-back-button');
    return await element.click();
})


Then('I should be logged into Ghost', async function () {
    const dashboardHeader = await this.driver.$('h2.gh-canvas-title');
    const headerText = await dashboardHeader.getText();
    expect(headerText).to.include('Dashboard');
});