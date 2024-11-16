const { Given, When, Then } = require('@cucumber/cucumber');



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

// Paso para agregar una nueva integración personalizada
When('agrego una nueva integración personalizada con el nombre {kraken-string}', async function (integrationName) {
    // Esperar y hacer clic en el botón "Agregar integración".
    let addIntegrationButton = await this.driver.$('#admin-x-settings-scroller > div > div:nth-child(6) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > button');
    await addIntegrationButton.waitForClickable({ timeout: 5000 });
    await addIntegrationButton.click();

    // Esperar el campo de entrada para el nombre de integración.
    let integrationNameInput = await this.driver.$('input[placeholder="Custom integration"]');
    await integrationNameInput.waitForExist({ timeout: 5000 });
    await integrationNameInput.setValue(integrationName);

    // Esperar y hacer clic en el botón "Guardar integración".
    let saveIntegrationButton = await this.driver.$('#modal-backdrop button.bg-black.text-white');
    await saveIntegrationButton.waitForClickable({ timeout: 5000 });
    await saveIntegrationButton.click();

    // Esperar y hacer clic en el botón "Cerrar".
    let closeButton = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[2]/div[2]/div/div[2]/div/button[1]');
    await closeButton.waitForClickable({ timeout: 5000 });
    await closeButton.click();
});

Then('debería ver {kraken-string} en la lista de integraciones', async function (integrationName) {
    const { expect } = await import('chai');

    const customButton = await this.driver.$('button[title="Custom"]');
    await customButton.click();

    const integrationListContainer = await this.driver.$('div[data-state="active"][role="tabpanel"]');
    await integrationListContainer.waitForExist({ timeout: 5000 });

    const integrationDiv = await integrationListContainer.$('div[data-testid="integrations"]');
    await integrationDiv.waitForExist({ timeout: 5000 });

    const childElements = await integrationDiv.$$('*'); 
    console.log('Componentes hijos:', childElements);

    const childTexts = await Promise.all(
        childElements.map(async (child) => await child.getText())
    );

    const containsExpectedText = childTexts.some((text) => text.includes(integrationName));

    expect(containsExpectedText).to.be.true;
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
        if (text.includes(integrationName)) {
            // Cambia el estilo del elemento para garantizar que sea visible
            await this.driver.execute((el) => {
                el.style.visibility = 'visible';
                el.style.display = 'block';
            }, item);

            // Busca el botón de eliminar dentro del elemento de la integración y haz clic
            const deleteButton = await item.$('#radix-\:rp\:-content-custom > div > section > div > div > div.visible.py-3.md\:pl-6.md\:pr-6.group-hover\/list-item\:visible.md\:invisible > button');
            if (deleteButton) {
                await deleteButton.click();
            } else {
                console.warn("No se encontró el botón de eliminar para la integración seleccionada.");
            }
            break;
        }
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

//---



// Paso para habilitar la suscripción a newsletters
When('habilito la suscripción a newsletters', async function () {
    let newsletterToggle = await this.driver.$('#\\:ro\\:');
    await newsletterToggle.click();
});

When('hago clic en el botón de editar título y descripción', async function () {
    let editButton = await this.driver.$('#admin-x-settings-scroller > div > div:nth-child(1) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > div > button');
    await editButton.click();
});








Then('el nombre del sitio debería ser {kraken-string}', async function (expectedTitle) {
    // Esperar a que el elemento que contiene el título esté visible
    let titleElement = await this.driver.$('div.flex.items-center.mt-1');
    await titleElement.waitForExist({ timeout: 5000 });

    // Obtener el texto del elemento
    let actualTitle = await titleElement.getText();

    // Validar que el texto del elemento sea igual al título esperado
    const { expect } = await import('chai');
    expect(actualTitle).to.equal(expectedTitle);
});

Then('la descripción del sitio debería ser {kraken-string}', async function (expectedDescription) {
    // Buscar el elemento h6 con el texto "Site description"
    let h6Element = await this.driver.$('h6=Site description');
    await h6Element.waitForExist({ timeout: 5000 });

    // Seleccionar el siguiente div
    let descriptionElement = await h6Element.$('..').$('div.flex.items-center.mt-1');
    await descriptionElement.waitForExist({ timeout: 5000 });

    // Obtener el texto del elemento
    let actualDescription = await descriptionElement.getText();

    // Validar que el texto del elemento sea igual a la descripción esperada
    const { expect } = await import('chai');
    expect(actualDescription).to.equal(expectedDescription);
});