describe('Configure Custom Integration', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
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
});
