const {Given, When, Then} = require('@cucumber/cucumber');
const expect = require('chai').expect;

let loginCompleted = false;

Then('I see the login verification element', async function () {
    let element = await this.driver.$('h2.gh-canvas-title=Let’s get started!');
    await element.waitForDisplayed({timeout: 10000});
    expect(await element.isDisplayed()).to.be.true;
});
When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('input[type="email"]');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('input[type="password"]');
    return await element.setValue(password);
});

When('I click sign in', async function () {
    let element = await this.driver.$('span[data-test-task-button-state="idle"]');
    await element.click();

    loginCompleted = true;
});


When('I click on the Tags section', async function () {
    let element = await this.driver.$('a[data-test-nav="tags"]');
    await element.click();
    await this.driver.pause(2000);
});

When('I click on the New tag section', async function () {
    let element = await this.driver.$('a[href="#/tags/new/"]');
    await element.click();
    await this.driver.pause(2000);
});

When('I enter the tag name {kraken-string}', async function (tagName) {
    let element = await this.driver.$('input[data-test-input="tag-name"]');
    await element.setValue(tagName);
    await this.driver.pause(2000);
});
Given('I enter the tag color {kraken-string}', async function (tagColor) {
    let element = await this.driver.$('input[data-test-input="accentColor"]');
    await element.setValue(tagColor);
    await this.driver.pause(2000);
});
Given('I enter the tag description {kraken-string}', async function (description) {
    let element = await this.driver.$('textarea[data-test-input="tag-description"]');
    await element.setValue(description);
    await this.driver.pause(2000);
});
Given('I click on the Save button', async function () {
    let element = await this.driver.$('span[data-test-task-button-state="idle"]');
    await element.click();
    await this.driver.pause(2000);
});
Given('I click on the Published section', async function () {
    let element = await this.driver.$('a[data-test-nav-custom="posts-Published"]');
    await element.click();
    await this.driver.pause(2000);
});
Given('I click on the Coming Soon published item', async function () {
    let element = await this.driver.$('a[href="#/editor/post/6731029cf870feddc91b36c0/"]');
    await element.click();
    await this.driver.pause(2000);
});
Given('I click on the settings button', async function () {
    let element = await this.driver.$('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon[title="Settings"][data-test-psm-trigger=""]');
    await element.click();
    await this.driver.pause(2000);
});
Given('I enter the tag {kraken-string}', async function (nameTag) {
    let element = await this.driver.$('div[data-test-token-input="true"] input.ember-power-select-trigger-multiple-input');
    await element.setValue(nameTag);
    await this.driver.keys('Enter');
    await this.driver.pause(2000);
});
Given('I click on the Posts button', async function () {
    let element = await this.driver.$('span=Posts');
    await element.click();
    await this.driver.pause(2000);
});
Given('I click on the Tag', async function () {
    let element = await this.driver.$('h3.gh-tag-list-name[data-test-tag-name=""]');
    await element.click();
    await this.driver.pause(2000);
});
When('I edit the tag name and change it to {kraken-string}', async function (newNameTag) {
    let element = await this.driver.$('input[data-test-input="tag-name"]');
    await element.setValue(newNameTag);
    await this.driver.pause(2000);
});
When(/^I click on the Delete button$/, async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-red.gh-btn-icon[data-test-button="delete-tag"]');
    await element.click();
    await this.driver.pause(2000);
});
When(/^I confirm the deletion$/, async function () {
    let element = await this.driver.$('button[data-test-button="confirm"]');
    await element.click();
    await this.driver.pause(2000);
});
Then('I should not see the tag {kraken-string}', async function (nameTag) {
    let elements = await this.driver.$$('h3.gh-tag-list-name');
    for (let element of elements) {
        let text = await element.getText();
        expect(text).to.not.equal(nameTag);
    }
});
When(/^I click on the filter posts by tag$/, async function () {
    let element = await this.driver.$('div.gh-contentfilter-menu.gh-contentfilter-tag[data-test-tag-select="true"]');
    await element.click();
    await this.driver.pause(2000);
});
Then('I should see posts associated with the tag {kraken-string}', async function(newNameTag) {
    const dropdown = await this.driver.$('div.gh-contentfilter-menu-dropdown');
    const options = await dropdown.$$('li.ember-power-select-option');
    const optionTexts = await Promise.all(options.map(async (option) => {
        return await option.getText();
    }));

    console.log('Available tags:', optionTexts);

    expect(optionTexts).to.include(newNameTag, `The tag ${newNameTag} is not associated with the displayed posts.`);
});
Then('I click on the specific tag', async function () {
    let element = await this.driver.$('li.ember-power-select-option[data-option-index="1"]');
    await element.click();
    await this.driver.pause(2000);
});
Given(/^I click on the Posts section$/, async function () {
    let element = await this.driver.$('a[data-test-nav="posts"]');
    await element.click();
    await this.driver.pause(2000);
});
Then('I should see the tags {kraken-string}, {kraken-string}, and {kraken-string} associated with the post', async function (tag1, tag2, tag3) {
    let elements = await this.driver.$$('div[data-test-token-input="true"] .ember-power-select-multiple-inner-text');
    let tags = await Promise.all(elements.map(async (element) => {
        return await element.getText();
    }));
    expect(tags).to.include(tag1);
    expect(tags).to.include(tag2);
    expect(tags).to.include(tag3);
});
