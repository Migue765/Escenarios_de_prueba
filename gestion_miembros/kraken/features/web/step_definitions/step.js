const { Given, When, Then } = require('@cucumber/cucumber');

Given('I navigate to {kraken-string}', async function (url) {
    await this.driver.url(url);
});

When('I enter the email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
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

When('I click new post', async function () {
    let element = await this.driver.$('[data-test-new-post-button]');
    return await element.click();
})

When('I click new member', async function () {
    let element = await this.driver.$('[data-test-new-member-button="true"]');
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

When('I click the first post in the list', async function () {
    let element = await this.driver.$('.gh-list-row.gh-posts-list-item.gh-post-list-plain-status a.gh-list-data.gh-post-list-title');
    return await element.click();
});

When('I click in settings page', async function () {
    let element = await this.driver.$('.settings-menu-toggle');
    return await element.click();
})

When('I click in delete page', async function () {
    let element = await this.driver.$('.settings-menu-delete-button');
    return await element.click();
})

When('I click in confirm delete page', async function () {
    let element = await this.driver.$('[data-test-button="delete-post-confirm"]');
    return await element.click()
})

When('I click in button published', async function () {
    let element = await this.driver.$('[data-test-nav-custom="posts-Published"]');
    return await element.click()
})

// Members
When('I click in button members', async function () {
    let element = await this.driver.$('[data-test-nav="members"]');
    return await element.click();
})

When('I insert member name {string}', async function (name) {
    let element = await this.driver.$('[data-test-input="member-name"]');
    return await element.setValue(name);
})

When('I insert email {string}', async function (email) {
    let element = await this.driver.$('[data-test-input="member-email"]');
    return await element.setValue(email);
})

When('I insert label {string}', async function (label) {
    let element = await this.driver.$('.ember-power-select-trigger-multiple-input');
    return await element.setValue(label);
})

When('I select Enter on label', async function () {
    let element = await this.driver.$('.ember-power-select-trigger-multiple-input');
    return await element.keys('Enter');
})

When('I insert note {string}', async function (note) {
    let element = await this.driver.$('.gh-member-details-textarea');
    return await element.setValue(note);
})

When('I click in button save', async function () {
    let element = await this.driver.$('[data-test-button="save"]');
    return await element.click();
})



Then('I should be logged into Ghost', async function () {
    const dashboardHeader = await this.driver.$('h2.gh-canvas-title');
    const headerText = await dashboardHeader.getText();
    expect(headerText).to.include('Dashboard');
});

