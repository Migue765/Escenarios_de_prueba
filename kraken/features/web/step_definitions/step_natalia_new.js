const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');


When('I enter email {kraken-string}', async function (email) {
  let element = await this.driver.$('#identification');
  return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
  let element = await this.driver.$('#password');
  return await element.setValue(password);
});

When('I click on the profile section', async function () {
  const userAvatar = await this.driver.$('div.gh-user-avatar.relative');
  await userAvatar.click();
});

Then('I should see menu profile', async function () {
  const menu = await this.driver.$('.dropdown-menu.dropdown-triangle-top');
  await this.driver.waitUntil(async () => await menu.isDisplayed(), {
    timeout: 5000,
    timeoutMsg: 'El elemento menu no se muestra en la página'
  })
});


When('I click on the selection your profile', async function () {
  const profileLink = await this.driver.$('li > a[data-test-nav="user-profile"]');
  await profileLink.click();
});

Then('I should go to page profile', async function () {
  const currentUrl = await this.driver.getUrl();
  assert.strictEqual(currentUrl, 'http://localhost:2368/ghost/#/settings/staff/natalia', 'El inicio de sesión no fue exitoso, la URL no es la esperada');

});

Then('I should see user name as {kraken-string}', async function (expectedValue) {
  const inputField = await this.driver.$('input[class*="peer z-[1]"]');
  await inputField.waitForExist({ timeout: 5000 });
  await inputField.waitForDisplayed({ timeout: 5000 });
  const actualValue = await inputField.getValue();
  if (actualValue !== expectedValue) {
    throw new Error(`El valor del campo es "${actualValue}", pero se esperaba "${expectedValue}".`);
  }
  console.log(`El valor del campo es correcto: ${actualValue}`);
});



When('I click the actions button', async function () {
  let element = await this.driver.$("//button[span[text()='Actions']]");
  return await element.click();
});


Then('I should see menu view user activity', async function () {
  let element = await this.driver.$("//button[contains(text(), 'View user activity')]");
  await element.waitForExist({ timeout: 5000 });
  await element.waitForDisplayed({ timeout: 5000 });
});


When('I click View user activity', async function () {
  let element = await this.driver.$("//button[contains(text(), 'View user activity')]");
  return await element.click();
});



When('I click in save', async function () {
  let element = await this.driver.$("//button[span[text()='Save']]");
  return await element.click();
});


Then('I should see error email {kraken-string}', async function (errorMessage) {
  const errorMessageElement = await this.driver.$(`span*=${errorMessage}`);
  await this.driver.waitUntil(async () => await errorMessageElement.isDisplayed(), {
    timeout: 5000,
    timeoutMsg: `El mensaje de error no se muestra`
  });
});


Then('I should see the title History', async function () {
  const titleElement = await this.driver.$('h3');
  await this.driver.waitUntil(async () => await titleElement.isDisplayed(), {
    timeout: 5000,
    timeoutMsg: 'El elemento h3 no se muestra en la página'
  });

  const actualTitle = await titleElement.getText();
  assert.strictEqual(actualTitle.trim(), "History", `El título esperado no es el recibido. Se obtuvo: "${actualTitle}"`);
});

When('I enter website text {kraken-string}', async function (website) {
  let element = await this.driver.$('//label[text()="Website"]');
  return await element.setValue(website);
});

Then('I should see error website', async function () {
  const errorMessageElement = await this.driver.$(`span*=${"Enter a valid URL"}`);
  await this.driver.waitUntil(async () => await errorMessageElement.isDisplayed(), {
    timeout: 5000,
    timeoutMsg: `El mensaje de error no se muestra`
  });
});
