describe('Edit Profile', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Validate that the user can edit and save changes to their profile, such as name or profile picture', () => {

        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(4000);


    });
});
