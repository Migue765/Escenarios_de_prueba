describe('Settings Management', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Modify the site name in the general settings and verify the change in the interface', () => {
        cy.visit(LOCAL_HOST + "#/settings");
        cy.get('#admin-x-settings-scroller > div > div:nth-child(1) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > div > button').click();
        cy.get('input[placeholder="Site title"]').clear()
        cy.get('input[placeholder="Site title"]').type('New title site');
        cy.get('#admin-x-settings-scroller button.cursor-pointer.bg-green').click();
        cy.reload();
        cy.contains('New title site').should('exist');
    });

    it('Update the site description in the general settings', () => {
        cy.visit(LOCAL_HOST + "#/settings");
        cy.get('#admin-x-settings-scroller > div > div:nth-child(1) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > div > button').click();
        cy.get('input[placeholder="Site description"]').clear();
        cy.get('input[placeholder="Site description"]').type('New Site Description');
        cy.get('#admin-x-settings-scroller button.cursor-pointer.bg-green').click();
        cy.reload();
        cy.contains('New Site Description').should('exist');
    });

    it('Configure a custom integration in the advanced section and verify its creation', () => {
        cy.visit(LOCAL_HOST + "#/settings");
        cy.get('#integrations').scrollIntoView();
        cy.get('#integrations').click();
        cy.get('#admin-x-settings-scroller > div > div:nth-child(6) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > button').click();
        cy.get('input[placeholder="Custom integration"]').type('Custom Integration');
        cy.get('#modal-backdrop button.bg-black').click();
        cy.contains('Custom Integration').should('exist');
    });

    it('Enable newsletter subscription and verify the option is available', () => {
        cy.visit(LOCAL_HOST + "#/settings");
        cy.get('#\\:ro\\:').click();
        cy.get('#\\:ro\\:').should('be.enabled');
    });

    //TODO: Fix the test
    it.skip('Process to delete an integration and verify it disappears from the list', () => {
        cy.visit(LOCAL_HOST + "#/settings");
        cy.get('#integrations').scrollIntoView()
        cy.get('#integrations').click();
        cy.get('button[title="Custom"]').click();
        cy.wait(3000);
        cy.get('div.group\\/list-item').contains('Custom Integration').parent().within(() => {
            cy.get('button.bg-red').click();
        });
        cy.get('section[data-testid="confirmation-modal"] button.bg-red').click();
        cy.contains('Custom Integration').should('not.exist');
    });
});
