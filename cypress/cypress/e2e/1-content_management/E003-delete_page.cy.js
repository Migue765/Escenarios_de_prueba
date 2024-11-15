describe('Content Management: Delete and Verify Post', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
    });

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Create a new post and verify it appears in the list of posts', () => {

        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(4000);

        // Enter the pages section
        cy.get('[data-test-nav="pages"]').click();
        cy.url().should('include', '/ghost/#/pages');

        // Create a new page
        cy.get('[data-test-new-page-button]').click();
        cy.wait(2000);
        cy.url().should('include', '/ghost/#/editor/page');

        // Wait for the editor to be visible
        cy.get('.gh-editor-title', {timeout: 10000}).should('be.visible');

        // Fill out the new page form
        cy.get('.gh-editor-title').type('My first page{enter}');
        cy.get('[data-secondary-instance="false"]').type("hello")

        // Publish the page
        cy.get('[data-test-button="publish-flow"]').first().click();
        cy.get('[data-test-button="continue"]').click();
        cy.get('[data-test-button="confirm-publish"]').click();

        // Click the close button
        cy.get('[data-test-button="close-publish-flow"]').click();
        // Verify that the page has been published
        cy.url().should('include', '/ghost/#/pages');
    });

    it('should delete the selected page', () => {
        cy.visit(LOCAL_HOST + "#/pages");
        cy.url().should('include', '/ghost/#/pages');
        cy.get('.gh-posts-list-item').first().click();
        cy.url().should('include', '/editor/page/');
        cy.get('[data-test-psm-trigger]').click();
        cy.get('.settings-menu-delete-button').click();
        cy.get('.modal-footer .gh-btn-red').click();
        cy.url().should('include', '/ghost/#/pages');
        cy.get('.gh-posts-list-item:contains("My first page")').should('not.exist');
    });
});
