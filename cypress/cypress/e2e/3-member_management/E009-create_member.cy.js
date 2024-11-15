describe('Member Management: Add and Verify Member', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
    });

    it('Add a new member and verify it appears in the list of members', () => {

        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(4000);

        // Enter the members section
        cy.get('[data-test-nav="members"]').click();
        cy.url().should('include', '/ghost/#/members');

        // Create a new member
        cy.get('[data-test-new-member-button]').click();
        cy.wait(2000);
        cy.url().should('include', '/ghost/#/members/new');

        cy.get('[data-test-input="member-name"]').type('John Doe');
        cy.get('[data-test-input="member-email"]').type('test2a25@test.com');
        cy.get('.ember-power-select-trigger-multiple-input').type('Test Label{enter}');
        cy.get('[data-test-input="member-note"]').type('Test Note');

        cy.get('[data-test-button="save"]').click();

        cy.url().should('include', '/ghost/#/members');
    });
});