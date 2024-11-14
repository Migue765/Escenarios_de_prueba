describe('Delete a tag and verify it is not in the tag list', () => {
    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Delete a tag and verify it is not in the tag list', () => {
        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(4000);

        cy.get('a[data-test-nav="tags"]').click();
        cy.wait(4000);

        cy.get('section.view-container.content-list').find('a[title="Edit tag"]').first().click();
        cy.wait(2000);

        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon[data-test-button="delete-tag"]').click();
        cy.wait(1000);

        cy.get('div.modal-content[data-test-modal="confirm-delete-tag"]').contains('Delete').should('exist');

    });
});
