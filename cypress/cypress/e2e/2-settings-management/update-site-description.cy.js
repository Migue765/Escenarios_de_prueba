describe('Update Site Description', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
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
});
