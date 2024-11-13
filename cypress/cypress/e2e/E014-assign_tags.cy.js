describe('Assign multiple tags to a post and verify they are saved correctly', () => {
    const EMAIL = "juanes.reich@gmail.com";
    const PASSWORD = "6-pVzAeXxT9Uq_-";
    const TAG_1 = 'Tag example 1';
    const TAG_2 = 'Tag example 2';
    const TAG_3 = 'Tag example 3';

    before(() => {
        cy.visit("http://localhost:2369/ghost/");
    });

    it('Assign multiple tags to a post and verify they are saved correctly', () => {
        cy.get('input[type="email"]').type(EMAIL);
        cy.get('input[type="password"]').type(PASSWORD);
        cy.wait(2000);
        cy.get('span[data-test-task-button-state="idle"]').click();
        cy.wait(8000);

        cy.get('a[data-test-nav-custom="posts-Published"]').click();
        cy.wait(2000);

        cy.get('a[href="#/editor/post/6731029cf870feddc91b36c0/"]').click();
        cy.wait(2000);

        cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon[title="Settings"]').click();
        cy.wait(2000);

        cy.get('div#tag-input').click().type(TAG_1).type('{enter}');
        cy.wait(1000);

        cy.get('div#tag-input').click().type(TAG_2).type('{enter}');
        cy.wait(1000);

        cy.get('div#tag-input').click().type(TAG_3).type('{enter}');
        cy.wait(2000);

        const tagsToVerify = [TAG_1, TAG_2, TAG_3];
        tagsToVerify.forEach(tag => {
            cy.contains(tag).should('exist');
        });

        cy.get('a[data-test-link="posts"]').click();
        cy.wait(4000);
    });
});
