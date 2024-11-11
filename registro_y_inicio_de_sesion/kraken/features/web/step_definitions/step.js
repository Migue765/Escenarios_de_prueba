const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I enter blog title {kraken-string}', async function (blog) {
    let element = await this.driver.$('#blog-title');
    return await element.setValue(blog);
});

When('I enter name {kraken-string}', async function (name) {
    let element = await this.driver.$('#name');
    return await element.setValue(name);
});

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#email');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click on register', async function() {
    let element = await this.driver.$('#ember4');
    return await element.click();
})

Then('I should see an error message {kraken-string}', async function (expectedError) {
    const errorMessageElement = await this.driver.$('div.form-group.error > p.response');
    await this.driver.waitUntil(async () => await errorMessageElement.isDisplayed(), {
      timeout: 5000,
      timeoutMsg: `El mensaje de error no se muestra`
    });
  
    const actualErrorMessage = await errorMessageElement.getText();
    assert.strictEqual(actualErrorMessage, expectedError, `El mensaje de error esperado no es el recibido. Se obtuvo: "${actualErrorMessage}"`);
  });

  Then('I should see the following errors:', async function (dataTable) {
    const rows = dataTable.rows();
    for (const [field, expectedError] of rows) {

      const errorMessageElement = await this.driver.$(`div.form-group.error:has(input[name="${field}"]) p.response`);

      await this.driver.waitUntil(async () => await errorMessageElement.isDisplayed(), {
        timeout: 5000,
        timeoutMsg: `El mensaje de error para el campo "${field}" no se muestra`
      });
  
      const actualErrorMessage = await errorMessageElement.getText();
      
      assert.strictEqual(actualErrorMessage.trim(), expectedError, `El mensaje de error esperado para el campo "${field}" no es el recibido. Se obtuvo: "${actualErrorMessage}"`);
    }
  });

  Then('I should see the dashboard or a logged-in page', async function () {
    const currentUrl = await this.driver.getUrl();
    assert.strictEqual(currentUrl, 'http://localhost:2368/ghost/#/dashboard', 'El inicio de sesión no fue exitoso, la URL no es la esperada');
  
  });

  When('I click in login', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
});

When('I enter identification {kraken-string}', async function (identification) {
  let element = await this.driver.$('#identification');
  return await element.setValue(identification);
});

Then('I should see the title {kraken-string}', async function (expectedTitle) {
  const titleElement = await this.driver.$('h1');
  await this.driver.waitUntil(async () => await titleElement.isDisplayed(), {
      timeout: 5000,
      timeoutMsg: 'El elemento h1 no se muestra en la página'
  });

  const actualTitle = await titleElement.getText();
  assert.strictEqual(actualTitle.trim(), expectedTitle, `El título esperado no es el recibido. Se obtuvo: "${actualTitle}"`);
});

Then('I should see an error password {kraken-string}', async function (expectedError) {
  const errorMessageElement = await this.driver.$('p.main-error[data-test-flow-notification]');
  await this.driver.waitUntil(async () => await errorMessageElement.isDisplayed(), {
    timeout: 5000,
    timeoutMsg: 'El mensaje de error no se muestra'
  });
  const actualErrorMessage = await errorMessageElement.getText();
  assert.strictEqual(actualErrorMessage.trim(), expectedError, `El mensaje de error esperado no es el recibido. Se obtuvo: "${actualErrorMessage}"`);
});