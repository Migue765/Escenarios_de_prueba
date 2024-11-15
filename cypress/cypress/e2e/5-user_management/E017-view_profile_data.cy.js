describe('View Profile Data', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Verify that the system displays the user\'s name, email, and other personal data in their profile', () => {
        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(4000);


    });
});
