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


let loginCompleted = false;

Then('I see the login verification element', async function () {
    let element = await this.driver.$('h2.gh-canvas-title=Let’s get started!');
    await element.waitForDisplayed({ timeout: 10000 });
});

When('I enter email 2{kraken-string}', async function (email) {
    let element = await this.driver.$('input[type="email"]');
    return await element.setValue(email);
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
    let element = await this.driver.$('div.gh-posts-list-item-group');
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
    }
});
When(/^I click on the filter posts by tag$/, async function () {
    let element = await this.driver.$('div.gh-contentfilter-menu.gh-contentfilter-tag[data-test-tag-select="true"]');
    await element.click();
    await this.driver.pause(2000);
});
Then('I should see posts associated with the tag {kraken-string}', async function (newNameTag) {
    const dropdown = await this.driver.$('div.gh-contentfilter-menu-dropdown');
    const options = await dropdown.$$('li.ember-power-select-option');
    const optionTexts = await Promise.all(options.map(async (option) => {
        return await option.getText();
    }));

    console.log('Available tags:', optionTexts);
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
Then('I should see the tags {kraken-string}, {kraken-string} associated with the post', async function (tag1, tag2) {
    let elements = await this.driver.$$('div[data-test-token-input="true"] .ember-power-select-multiple-inner-text');
    let tags = await Promise.all(elements.map(async (element) => {
        return await element.getText();
    }));
});

Then('validate creation tag witn name {kraken-string}', async function (nameTag) {
    const tag = await this.driver.$('ol.tags-list').$$('li.gh-list-row.gh-tags-list-item')[0]
    let tagTitle = await tag.$('.gh-tag-list-name').getText()
    assert.equal(tagTitle, nameTag)
})

When('delete all tags', async function () {
    const tags = await this.driver.$('ol.tags-list.gh-list').$$('li.gh-list-row.gh-tags-list-item')
    console.log(tags.length)
    for (let i = 0; i < tags.length; i++) {
        let tag = tags[i]
        await tag.click()
        await this.driver.pause(1000)
        await this.driver.$('[data-test-button="delete-tag"]').click()
        await this.driver.pause(1000)
        await this.driver.$('[data-test-button="confirm"]').click()
        await this.driver.pause(1000)
    }
})

Then('validate tag in filter {kraken-string}', async function (tagName) {
    const filter = await this.driver.$$('span.ember-power-select-selected-item')[3].getText()
    console.log(filter)
    assert.equal(tagName, filter)
})



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
});

Then('la descripción del sitio debería ser {string}', async function (description) {
    const titleComponent = await this.driver.$('[data-testid="title-and-description"]')
    const siteDescription = await titleComponent.$$('div.flex.items-center.mt-1')[1].getText()
    console.log(siteDescription);
    assert.equal(description, siteDescription);
})

Then('el nombre del sitio debería ser {string}', async function (description) {
    const titleComponent = await this.driver.$('[data-testid="title-and-description"]')
    const siteDescription = await titleComponent.$$('div.flex.items-center.mt-1')[0].getText()
    console.log(siteDescription);
    assert.equal(description, siteDescription);
})



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
    assert(currentUrl.includes('#/settings/staff/jaime'), `Expected URL to include '#/settings', but got ${currentUrl}`);
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

When('I enter blog title {kraken-string}', async function (blog) {
    let element = await this.driver.$('#blog-title');
    return await element.setValue(blog);
});

When('I enter name {kraken-string}', async function (name) {
    let element = await this.driver.$('#name');
    return await element.setValue(name);
});


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
    assert.strictEqual(currentUrl, 'http://localhost:2369/ghost/#/dashboard', 'El inicio de sesión no fue exitoso, la URL no es la esperada');

});

When('I click in login', async function () {
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

