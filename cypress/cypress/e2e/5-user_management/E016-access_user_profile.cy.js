describe('Access User Profile from Menu', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Verify that the user can access their profile from the user menu', () => {

        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(4000);


    });
});
