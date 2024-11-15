describe('View User Activity', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Validate that the profile shows the user\'s recent activity, such as posts or comments', () => {

        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(4000);


    });
});
