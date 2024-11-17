const { Given, When, Then } = require('@cucumber/cucumber');

const assert = require('assert');


// Paso para navegar a la URL
Given('navego a {kraken-string}', async function (url) {
    await this.driver.url(url);
});

// Paso para esperar un tiempo determinado
When('espero {int} segundos', async function (seconds) {
    await this.driver.pause(seconds * 1000);
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
    let titleInput = await this.driver.$('input[placeholder="Site title"]');
    await titleInput.setValue(title);
});

When('ingreso la descripción {kraken-string}', async function (description) {
    let descriptionInput = await this.driver.$('input[placeholder="Site description"]');
    await descriptionInput.setValue(description);
});


// Paso para guardar la descripción y/o título
When('guardo la página', async function () {
    let saveButton = await this.driver.$('#admin-x-settings-scroller > div > div:nth-child(1) > div > div.relative.flex-col.gap-6.rounded-xl.transition-all.hover\\:border-grey-200.border.p-5.hover\\:shadow-sm.md\\:p-7.flex.border-grey-200.shadow-sm.undefined.border-grey-250.dark\\:border-grey-925 > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > div > button.cursor-pointer.bg-green.text-white.hover\\:bg-green-400.inline-flex.items-center.justify-center.whitespace-nowrap.rounded.text-sm.transition.font-bold.h-7.px-3');
    await saveButton.click();
});
// Paso para hacer clic en el botón de configuración
When('hago clic en el botón de configuración', async function () {
    let settingsButton = await this.driver.$('[data-test-nav="settings"]');
    await settingsButton.click();
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
    await settingsButton.waitForExist({ timeout: 5000 });
    await settingsButton.scrollIntoView();
    await settingsButton.click();
});


When('agrego una nueva integración personalizada con el nombre {kraken-string}', async function (integrationName) {
    let addIntegrationButton = await this.driver.$('#admin-x-settings-scroller > div > div:nth-child(6) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > button');
    await addIntegrationButton.waitForClickable({ timeout: 5000 });
    await addIntegrationButton.click();

    let integrationNameInput = await this.driver.$('input[placeholder="Custom integration"]');
    await integrationNameInput.waitForExist({ timeout: 5000 });
    await integrationNameInput.setValue(integrationName);

    let saveIntegrationButton = await this.driver.$('#modal-backdrop button.bg-black.text-white');
    await saveIntegrationButton.waitForClickable({ timeout: 5000 });
    await saveIntegrationButton.click();

    let closeButton = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[2]/div[2]/div/div[2]/div/button[1]');
    await closeButton.waitForClickable({ timeout: 5000 });
    await closeButton.click();
});

Then('debería ver {kraken-string} en la lista de integraciones', async function (integrationName) {
    const customButton = await this.driver.$('button[title="Custom"]');
    await customButton.click();
    await this.driver.pause(3000)
    const integrationListContainer = await this.driver.$('[data-testid="integrations"]');
    const span = await integrationListContainer.$('.flex.flex-col').$('span').getText()
    console.log(span)
    assert.equal(span, integrationName)
});


//--eliminar
// Paso para hacer clic en la sección de integraciones
When('selecciono el botón {string} para asegurarme de que estoy en la pestaña correcta', async function (buttonTitle) {
    let customButton = await this.driver.$(`button[title="${buttonTitle}"]`);
    await customButton.click();
});

When('espero a que la lista de integraciones esté visible', async function () {
    let integrationListContainer = await this.driver.$('div[data-state="active"][role="tabpanel"]');
    await integrationListContainer.waitForExist({ timeout: 15000 });
});

When('elimino la integración {kraken-string} de la lista', async function (integrationName) {
    const { expect } = await import('chai');

    // Encuentra el botón de 'Integrations' y haz clic para cargar la lista de integraciones
    const integrationsButton = await this.driver.$('#integrations');
    if (integrationsButton) {
        await integrationsButton.click();
    } else {
        console.warn("El botón 'integrations' no se encontró en el DOM.");
        return;
    }

    // Espera a que el contenedor de pestañas de la lista de integraciones esté presente
    const integrationListContainer = await this.driver.$('div[data-state="active"][role="tabpanel"]');
    if (!integrationListContainer) {
        console.warn("No se encontró el contenedor de la lista de integraciones.");
        return;
    }

    // Encuentra todos los elementos de la lista de integraciones
    const integrationList = await integrationListContainer.$$('div.group\\/list-item');

    for (let item of integrationList) {
        let text = await item.$('div.flex.grow.flex-col.py-3.pr-6 > span').getText();

        // Verifica si el nombre de la integración coincide con el parámetro recibido
        // Simula el evento mouseover para hacer visible el botón de eliminar
        await this.driver.execute((el) => {
            const event = new MouseEvent('mouseover', {
                view: window,
                bubbles: true,
                cancelable: true
            });
            el.dispatchEvent(event);
        }, item);

        // Busca el botón de eliminar dentro del elemento de la integración y haz clic
        const deleteButton = await item.$('button:contains("Delete")');
        if (deleteButton) {
            await deleteButton.click();
        } else {
            console.warn("No se encontró el botón de eliminar para la integración seleccionada.");
        }
        break;
    }
});




When('espero a que el modal de confirmación esté visible', async function () {
    let confirmationModal = await this.driver.$('section[data-testid="confirmation-modal"]');
    await confirmationModal.waitForExist({ timeout: 15000 });
});

When('confirmo la eliminación', async function () {
    let confirmationModal = await this.driver.$('section[data-testid="confirmation-modal"]');
    let confirmDeleteButton = await confirmationModal.$('button.bg-red.text-white');
    await confirmDeleteButton.click();
});

When('habilito la suscripción a newsletters', async function () {
    let newsletterToggle = await this.driver.$('[data-testid="enable-newsletters"]');
    let status = await newsletterToggle.$('.flex.flex-col.gap-x-5.gap-y-7.undefined').$('span').getText()
    console.log("status:", status)
    if (status == 'Disabled') {
        await newsletterToggle.$("div.group.flex.items-start.gap-2.dark\\:text-white.justify-between.undefined").click()
        console.log("news letter se ha activado correctamente")
        await this.driver.pause(3000);
    }
    else {
        console.log("news letter se encuentra activado")
        await this.driver.pause(3000);
    }

});


When('hago clic en el botón de editar título y descripción', async function () {
    let editButton = await this.driver.$('#admin-x-settings-scroller > div > div:nth-child(1) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > div > button');
    await editButton.click();
});

When('edito newsletters my blog', async function () {
    // Paso 1: Dar clic en el primer elemento de la lista de newsletters
    let firstNewsletter = await this.driver.$('[data-testid="newsletters"]').$('tr');
    await firstNewsletter.click();
    // Paso 2: Oprimir el botón en la ventana emergente
    let designButton = await this.driver.$('button#design');
    await designButton.click();
    this.driver.pause(2000)
    let buttons = await this.driver.$$('div.group.flex.items-start.gap-2.dark\\:text-white.justify-between.undefined')
    console.log(buttons.length)
    for (let i = 0; i < buttons.length; i++) {
        let button = await buttons[i].$('button')
        let atribute = await button.getAttribute('aria-checked');
        if (atribute === 'true') {
            await button.click();
            await this.driver.pause(1000)
        }
        else {
            console.log(atribute)
        }
    }
});

Then('valido cambios en newsletters', async function () {
    let newsletterToggle = await this.driver.$('[data-testid="enable-newsletters"]');
    let status = await newsletterToggle.$('.flex.flex-col.gap-x-5.gap-y-7.undefined').$('span').getText()
    assert.equal(status, 'Enabled')
});


When('delete all custom integration', async function () {
    const customButton = await this.driver.$('button[title="Custom"]');
    await customButton.click();
    await this.driver.pause(3000)
    const integrationListContainer = await this.driver.$('[data-testid="integrations"]');
    const button = await integrationListContainer.$('.flex.flex-col').$('button')
    await button.click();
    await this.driver.pause(500);
    const modal = await this.driver.$('#modal-backdrop').$('button.bg-red')
    await modal.click();
    await this.driver.pause(4000)
})
