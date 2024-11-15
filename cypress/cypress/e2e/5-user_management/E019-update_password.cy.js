describe('Update Password', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Verify that the user can change their password correctly from their profile', () => {

        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(4000);


    });
});
