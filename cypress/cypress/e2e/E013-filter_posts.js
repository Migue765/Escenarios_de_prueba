describe('Filter posts by tag', () => {
    const EMAIL = "juanes.reich@gmail.com";
    const PASSWORD = "6-pVzAeXxT9Uq_-";
    const NEW_NAME_TAG = 'Edited Spectacular Tag';

    before(() => {
        cy.visit("http://localhost:2369/ghost/");
    });

    it('Filter posts by tag', () => {
        cy.get('input[type="email"]').type(EMAIL);
        cy.wait(2000);
        cy.get('input[type="password"]').type(PASSWORD);
        cy.wait(2000);
        cy.get('span[data-test-task-button-state="idle"]').click();
        cy.wait(4000);

        cy.get('a[data-test-nav="posts"]').click();
        cy.wait(2000);

        cy.get('div.gh-contentfilter-menu.gh-contentfilter-tag[data-test-tag-select="true"]').click();
        cy.wait(2000);

        cy.get('div.gh-contentfilter-menu-dropdown li.ember-power-select-option').contains(NEW_NAME_TAG).click();
        cy.wait(4000);
    });
});
