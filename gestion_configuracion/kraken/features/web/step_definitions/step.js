const { Given, When, Then } = require('@cucumber/cucumber');

Given('I navigate to {kraken-string}', async function (url) {
  await this.driver.url(url);
});

Given('I wait for {int} seconds', async function (seconds) {
  await this.driver.pause(seconds * 1000);
});

When('I enter the email {kraken-string}', async function (email) {
  let emailInput = await this.driver.$('input[name="identification"]');
  await emailInput.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
  let passwordInput = await this.driver.$('input[name="password"]');
  await passwordInput.setValue(password);
});

When('I click login', async function () {
  let loginButton = await this.driver.$('button[type="submit"]');
  await loginButton.click();
});

When('I click on the pages section', async function () {
  let pagesButton = await this.driver.$('a[href="#/pages/"]');
  await pagesButton.click();
});

When('I click on the new page button', async function () {
  let newPageButton = await this.driver.$('button.gh-btn.gh-btn-green');
  await newPageButton.click();
});

When('I enter the title {kraken-string}', async function (title) {
  let titleInput = await this.driver.$('textarea.gh-editor-title');
  await titleInput.setValue(title);
});

When('I go back to the previous page', async function () {
  let backButton = await this.driver.$('a.gh-editor-back-button');
  await backButton.click();
});

Then('I send a signal to user 1 containing {kraken-string}', async function (message) {
  console.log(message); 
});

When('I navigate to the advanced settings page', async function () {
  let settingsButton = await this.driver.$('a[href="#/settings/advanced/"]');
  await settingsButton.click();
});

When('I add a new custom integration with name {kraken-string}', async function (integrationName) {
  let addIntegrationButton = await this.driver.$('button.gh-btn.gh-btn-green');
  await addIntegrationButton.click();

  let integrationNameInput = await this.driver.$('input[id="custom-integration-name"]');
  await integrationNameInput.setValue(integrationName);

  let saveIntegrationButton = await this.driver.$('button.gh-btn.gh-btn-blue');
  await saveIntegrationButton.click();
});

Then('I should see {kraken-string} in the integrations list', async function (integrationName) {
  let integrationList = await this.driver.$$('ul.integration-list li');
  let found = false;
  for (let item of integrationList) {
    let text = await item.getText();
    if (text.includes(integrationName)) {
      found = true;
      break;
    }
  }
  expect(found).toBe(true);
});
