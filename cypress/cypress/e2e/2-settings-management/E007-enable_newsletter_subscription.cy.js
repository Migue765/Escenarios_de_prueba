describe('Enable Newsletter Subscription', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Enable newsletter subscription and verify the option is available', () => {
        cy.visit(LOCAL_HOST + "#/settings");
        cy.get('#\\:ro\\:').click();
        cy.get('#\\:ro\\:').should('be.enabled');
    });
});
