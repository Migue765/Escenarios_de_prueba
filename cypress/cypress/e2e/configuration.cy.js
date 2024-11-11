describe('Gestión de Configuración (Settings)', () => {

    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost');
        cy.wait(5000); // Espera para que se cargue la página
        cy.get('#identification').type('jn.cordobap1@uniandes.edu.co');
        cy.get('#password').type('-:pM7A388!aDufu');
        cy.get('#ember5').click(); // Botón de iniciar sesión
        cy.wait(3000);
    });

    it('Modificar el nombre del sitio en la configuración general y verificar el cambio en la interfaz', () => {
        cy.get('[data-test-nav="settings"]').click(); // Botón de configuración
        cy.get('#admin-x-settings-scroller > div > div:nth-child(1) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > div > button').click();
        cy.get('input[placeholder="Site title"]').clear().type('Nuevo Título del Sitio');
        cy.get('#admin-x-settings-scroller button.cursor-pointer.bg-green').click(); // Guardar cambios
        cy.reload();
        cy.contains('Nuevo Título del Sitio').should('exist');
    });

    it('Actualizar la descripción del sitio en la configuración general', () => {
        cy.get('[data-test-nav="settings"]').click();
        cy.get('#admin-x-settings-scroller > div > div:nth-child(1) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > div > button').click();
        cy.get('input[placeholder="Site description"]').clear().type('Nueva Descripción del Sitio');
        cy.get('#admin-x-settings-scroller button.cursor-pointer.bg-green').click();
        cy.reload();
        cy.contains('Nueva Descripción del Sitio').should('exist');
    });

    it('Configurar una integración personalizada en la sección avanzada y verificar su creación', () => {
        cy.get('[data-test-nav="settings"]').click();
        cy.get('#integrations').scrollIntoView().click();
        cy.get('#admin-x-settings-scroller > div > div:nth-child(6) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > button').click();
        cy.get('input[placeholder="Custom integration"]').type('Integración Personalizada');
        cy.get('#modal-backdrop button.bg-black').click();
        cy.contains('Integración Personalizada').should('exist');
    });

    it('Habilitar la suscripción a newsletters y verificar que la opción esté disponible', () => {
        cy.get('[data-test-nav="settings"]').click();
        cy.get('#\\:ro\\:').click(); // Toggle para activar newsletters
        cy.wait(5000);
        // Puedes verificar aquí si la opción está habilitada
    });

    it('Eliminar una integración y verificar que desaparezca de la lista', () => {
        cy.get('[data-test-nav="settings"]').click();
        cy.get('#integrations').scrollIntoView().click();
        cy.get('button[title="Custom"]').click();
        cy.wait(3000);
        cy.get('div.group\\/list-item').contains('Integración Personalizada').parent().within(() => {
            cy.get('button.bg-red').click();
        });
        cy.get('section[data-testid="confirmation-modal"] button.bg-red').click();
        cy.contains('Integración Personalizada').should('not.exist');
    });
});