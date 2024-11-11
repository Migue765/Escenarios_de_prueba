const { Given, When, Then } = require('@cucumber/cucumber');

// Paso para navegar a la URL
Given('navego a {kraken-string}', async function (url) {
    await this.driver.url(url);
});

// Paso para esperar un tiempo determinado
When('espero {int} segundos', async function (seconds) {
    await this.driver.pause(seconds * 1000); // Multiplicamos por 1000 para convertir segundos en milisegundos
});

// Paso para ingresar el correo electrónico
When('ingreso el correo electrónico {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

// Paso para ingresar la contraseña
When('ingreso la contraseña {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

// Paso para hacer clic en el botón de login
When('hago clic en iniciar sesión', async function () {
    let element = await this.driver.$('#ember5');
    return await element.click();
});

// Paso para hacer clic en la sección de páginas
When('hago clic en la sección de páginas', async function () {
    let pagesButton = await this.driver.$('#general');
    await pagesButton.click();
});

// Paso para hacer clic en el botón de nueva página
When('hago clic en el botón de nueva página', async function () {
    let newPageButton = await this.driver.$('#admin-x-settings-scroller button:nth-child(2)');
    await newPageButton.click();
});

// Paso para ingresar el título de la página
When('ingreso el título {kraken-string}', async function (title) {
    let titleInput = await this.driver.$('#\\:r1a\\:'); // Asegúrate de que este selector sea correcto
    await titleInput.setValue(title);
});

// Paso para ingresar la descripción de la página
When('ingreso la descripción {kraken-string}', async function (description) {
    let descriptionInput = await this.driver.$('#\\:r1c\\:'); // Asegúrate de que este selector sea correcto
    await descriptionInput.setValue(description);
});

// Paso para guardar la descripción y/o título
When('guardo la página', async function () {
    let saveButton = await this.driver.$('#admin-x-settings-scroller > div > div:nth-child(1) > div > div.relative.flex-col.gap-6.rounded-xl.transition-all.hover\\:border-grey-200.border.p-5.hover\\:shadow-sm.md\\:p-7.flex.border-grey-200.shadow-sm.undefined.border-grey-250.dark\\:border-grey-925 > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > div > button.cursor-pointer.bg-green.text-white.hover\\:bg-green-400.inline-flex.items-center.justify-center.whitespace-nowrap.rounded.text-sm.transition.font-bold.h-7.px-3');
    await saveButton.click();
});

// Paso para regresar a la página anterior
When('regreso a la página anterior', async function () {
    let backButton = await this.driver.$('a.gh-editor-back-button');
    await backButton.click();
});

// Paso para enviar un mensaje de señal al usuario 1
Then('envío una señal al usuario 1 que contiene {kraken-string}', async function (message) {
    console.log(message);
});

// Paso para navegar a la página de configuración avanzada
When('navego a la página de configuración avanzada', async function () {
    let settingsButton = await this.driver.$('#integrations');
    await settingsButton.waitForExist({ timeout: 5000 }); // Espera hasta 5 segundos para que el botón esté disponible
    await settingsButton.scrollIntoView();
    await settingsButton.click();
});

// Paso para agregar una nueva integración personalizada
When('agrego una nueva integración personalizada con el nombre {kraken-string}', async function (integrationName) {
    let addIntegrationButton = await this.driver.$('#admin-x-settings-scroller button:nth-child(2)');
    await addIntegrationButton.click();

    let integrationNameInput = await this.driver.$('input[placeholder="New integration"]');
    await integrationNameInput.setValue(integrationName);

    let saveIntegrationButton = await this.driver.$('#modal-backdrop button.bg-black.text-white');
    await saveIntegrationButton.click();
});

// Paso para eliminar una integración
When('elimino la integración {kraken-string}', async function (integrationName) {
    let integrationList = await this.driver.$$('ul.integration-list li');
    for (let item of integrationList) {
        let text = await item.getText();
        if (text.includes(integrationName)) {
            let deleteButton = await item.$('button'); // Asegúrate de que este selector sea correcto
            await deleteButton.click();
            break;
        }
    }
});

// Paso para habilitar la suscripción a newsletters
When('habilito la suscripción a newsletters', async function () {
    let newsletterToggle = await this.driver.$('#\\:ro\\:'); // Asegúrate de que este selector sea correcto
    await newsletterToggle.click();
});

// Paso para verificar si la integración aparece en la lista
Then('debería ver {kraken-string} en la lista de integraciones', async function (integrationName) {
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
