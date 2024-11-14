describe('Assign multiple tags to a post and verify they are saved correctly', () => {
    const LOCAL_HOST = Cypress.env('LOCAL_HOST');
    const NAME_TAG_1 = Cypress.env('NAME_TAG_1');
    const NAME_TAG_2 = Cypress.env('NAME_TAG_2');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Assign multiple tags to a post and verify they are saved correctly', () => {
        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(4000);

        cy.get('a[data-test-nav-custom="posts-Published"]').click();
        cy.wait(2000);

        cy.get('li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status:first a.gh-list-data.gh-post-list-title').click({force: true});
        cy.wait(2000);

        cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon[title="Settings"]').click();
        cy.wait(2000);

        cy.get('div#tag-input').click().type(NAME_TAG_1 + '{enter}').type(NAME_TAG_2 + '{enter}');
        cy.wait(1000);

        cy.contains(NAME_TAG_1).should('exist');
        cy.contains(NAME_TAG_2).should('exist');
    });
});
