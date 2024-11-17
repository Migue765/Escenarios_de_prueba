const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I click in button pages', async function () {
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


Given('I navigate to {kraken-string}', async function (url) {
    await this.driver.url(url);
});

When('I enter the email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I click login', async function () {
    let element = await this.driver.$('#ember5');
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



When('I click back', async function () {
    let element = await this.driver.$('.kg-prose');
    return await element.click();
})


When('I click the first post in the list', async function () {
    const pages = await this.driver.$("div.posts-list")
    const pageItem = await pages.$('div.gh-posts-list-item-group');
    return await await pageItem.click();
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

When('I click the first member in the list', async function () {
    let element = await this.driver.$('tbody.ember-view > tr[data-test-list="members-list-item"] > a[data-test-table-data="details"]');
    return await element.click();
});

Then('I should be logged into Ghost', async function () {
    const dashboardHeader = await this.driver.$('h2.gh-canvas-title');
    const headerText = await dashboardHeader.getText();
    expect(headerText).to.include('Dashboard');
});


Then('I should be the page in the list with name {string}', async function (title) {
    const page = await this.driver.$('div.posts-list').$('div.gh-posts-list-item-group').$('li.gh-list-row').$('h3')
    const pageTitle = await page.getText();
    console.log(pageTitle)
    assert.equal(pageTitle, title)
});

Then('I delete all pages', async function () {
    const pages = await this.driver.$("div.posts-list")
    const pageItems = await pages.$$('div.gh-posts-list-item-group');
    for (let i = 0; i < pageItems.length; i++) {
        let pageItem = pageItems[i];
        await pageItem.click();
        await this.driver.pause(1000);
        let settingsButton = await this.driver.$('.settings-menu-toggle');
        await settingsButton.click();
        let deleteButton = await this.driver.$('.settings-menu-delete-button');
        await deleteButton.click();
        let confirmDeleteButton = await this.driver.$('[data-test-button="delete-post-confirm"]');
        await confirmDeleteButton.click();
    }
})



Then('I should dont be the page in the list with name {string}', async function (title) {
    const pages = await this.driver.$("div.posts-list")
    const pageItems = await pages.$$('div.gh-posts-list-item-group');
    for (let i = 0; i < pageItems.length; i++) {
        let pageItem = pageItems[i];
        const pageTitle = await pageItem.$('li.gh-list-row').$('h3').getText();
        assert.notEqual(pageTitle, title)
    }
});

//Members validation
Then('I should be the member in the list with name {string}', async function (name) {
    const member = await this.driver.$('table.gh-list').$('[data-test-list="members-list-item"]').$('h3')
    const mamberName = await member.getText();
    console.log(mamberName)
    assert.equal(mamberName, name)
});


Then('I delete all members', async function () {
    const members = await this.driver.$('table.gh-list').$$('[data-test-list="members-list-item"]')
    for (let i = 0; i < members.length; i++) {
        let member = members[i];
        await member.click();
        await this.driver.pause(1000);
        let settingsButton = await this.driver.$('[data-test-button="member-actions"]');
        await settingsButton.click();
        let deleteButton = await this.driver.$('[data-test-button="delete-member"]');
        await deleteButton.click();
        let confirmDeleteButton = await this.driver.$('[data-test-button="confirm"]');
        await confirmDeleteButton.click();
    }
})