describe('Delete Integration', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    //TODO: Fix the this scenario because the integration is not deleted
    it.skip('Process to delete an integration and verify it disappears from the list', () => {
        cy.visit(LOCAL_HOST + "#/settings");
        cy.get('#integrations').scrollIntoView()
        cy.wait(3000);
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
