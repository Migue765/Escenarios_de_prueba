describe('Manage tags and sections', () => {
    console.log(Cypress.config());

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');
    const NAME_TAG_1 = Cypress.env('NAME_TAG_1');
    const NAME_TAG_2 = Cypress.env('NAME_TAG_2');
    const TAG_COLOR = Cypress.env('TAG_COLOR');
    const DESCRIPTION = Cypress.env('DESCRIPTION');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Create a new tag and verify it', () => {

        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(4000);
        cy.get('a[data-test-nav="tags"]').click();
        cy.wait(2000);
        cy.get('a[href="#/tags/new/"].gh-btn.gh-btn-primary').click();
        cy.wait(1000);
        cy.get('input[data-test-input="tag-name"]').type(NAME_TAG_1);
        cy.wait(1000);
        cy.get('input[data-test-input="accentColor"]').type(TAG_COLOR);
        cy.wait(1000);
        cy.get('textarea[data-test-input="tag-description"]').type(DESCRIPTION);
        cy.wait(1000);
        cy.get('span[data-test-task-button-state="idle"]').click();
        cy.wait(2000);

        cy.get('a[data-test-nav="tags"]').click();
        cy.wait(2000);
        cy.get('a[href="#/tags/new/"].gh-btn.gh-btn-primary').click();
        cy.wait(1000);
        cy.get('input[data-test-input="tag-name"]').type(NAME_TAG_2);
        cy.wait(1000);
        cy.get('input[data-test-input="accentColor"]').type(TAG_COLOR);
        cy.wait(1000);
        cy.get('textarea[data-test-input="tag-description"]').type(DESCRIPTION);
        cy.wait(1000);
        cy.get('span[data-test-task-button-state="idle"]').click();
        cy.wait(2000);

        cy.get('a[data-test-nav="tags"]').click();
        cy.wait(3000);

        cy.contains(NAME_TAG_1).should('exist');
        cy.contains(NAME_TAG_2).should('exist');

    });
});
