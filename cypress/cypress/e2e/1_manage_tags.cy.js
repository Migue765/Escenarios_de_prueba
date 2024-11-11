describe('Manage tags and sections', () => {
    console.log(Cypress.config());

    const EMAIL = "juanes.reich@gmail.com";
    const PASSWORD = "6-pVzAeXxT9Uq_-";
    const NAME_TAG = 'New Spectacular Tag';
    const TAG_COLOR = 'FF5733';
    const DESCRIPTION = 'This is a description for the new tag. It is a very long description that will be used to test the functionality of the tag creation process.';

    before(() => {
        cy.visit("http://localhost:2369/ghost/");
    });

    it('Create a new tag and verify it', () => {
        // Login to the Ghost admin
        cy.get('input[type="email"]').type(EMAIL);
        cy.wait(1000);
        cy.get('input[type="password"]').type(PASSWORD);
        cy.wait(1000);
        cy.get('span[data-test-task-button-state="idle"]').click();
        cy.wait(10000);

        cy.get('a[data-test-nav="tags"]').click();
        cy.wait(10000);
        cy.get('a[href="#/tags/new/"]').click();
        cy.wait(1000);
        cy.get('input[data-test-input="tag-name"]').type(NAME_TAG);
        cy.wait(1000);
        cy.get('input[data-test-input="accentColor"]').type(TAG_COLOR);
        cy.wait(1000);
        cy.get('textarea[data-test-input="tag-description"]').type(DESCRIPTION);
        cy.wait(1000);
        cy.get('span[data-test-task-button-state="idle"]').click();
        cy.wait(2000);

        cy.get('a[data-test-nav="tags"]').click();
        cy.wait(3000);

        cy.get('a[data-test-nav-custom="posts-Published"]').click();
        cy.wait(2000);

        cy.get('a[href="#/editor/post/6731029cf870feddc91b36c0/"]').click();
        cy.wait(2000);

        cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon[title="Settings"]').click();
        cy.wait(2000);

        cy.get('div#tag-input').click().type(NAME_TAG).type('{enter}');
        cy.wait(2000);

        cy.get('a[data-test-link="posts"]').click();
        cy.wait(4000);

    });
});
