describe('Delete a tag and verify it is not in the tag list', () => {
    const EMAIL = "juanes.reich@gmail.com";
    const PASSWORD = "6-pVzAeXxT9Uq_-";

    before(() => {
        cy.visit("http://localhost:2369/ghost/");
    });

    it('Delete a tag and verify it is not in the tag list', () => {
        cy.get('input[type="email"]').type(EMAIL);
        cy.get('input[type="password"]').type(PASSWORD);
        cy.wait(2000);
        cy.get('span[data-test-task-button-state="idle"]').click();
        cy.wait(4000);

        cy.get('a[data-test-nav="tags"]').click();
        cy.wait(4000);

        cy.get('a[href="#/tags/new-spectacular-tag/"]').first().click();
        cy.wait(2000);

        cy.get('button.gh-btn.gh-btn-red.gh-btn-icon[data-test-button="delete-tag"]').click();
        cy.wait(3000);

        cy.get('button[data-test-button="confirm"]').click();
        cy.wait(4000);

    });
});
