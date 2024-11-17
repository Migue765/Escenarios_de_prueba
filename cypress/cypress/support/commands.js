Cypress.Commands.add('LoginGhost', () => {
    cy.session("Login", () => {
        cy.visit(Cypress.env('LOCAL_HOST'));
        cy.wait(2000);

        cy.url().then((url) => {
            if (url.includes('/setup')) {
                // Fill out the user creation form
                cy.get('input[data-test-blog-title-input]').type('My Blog');
                cy.get('#name').type(Cypress.env('NAME'));
                cy.get('#email').type(Cypress.env('EMAIL'));
                cy.get('#password').type(Cypress.env('PASSWORD'));
                cy.get('[data-test-button="setup"]').click();
                cy.wait(5000);

            } else {
                // Log in with the existing user
                cy.visit(Cypress.env('LOCAL_HOST') + '#/signin');
                cy.get('#identification').type(Cypress.env('EMAIL'));
                cy.get('#password').type(Cypress.env('PASSWORD'));
                cy.get('[data-test-task-button-state="idle"]').click();
            }
        });
        cy.url().should('include', '/ghost/#/dashboard');
    });
});

Cypress.Commands.add('createTags', () => {
    const LOCAL_HOST = Cypress.env('LOCAL_HOST');
    const NAME_TAG_1 = Cypress.env('NAME_TAG_1');
    const NAME_TAG_2 = Cypress.env('NAME_TAG_2');
    const TAG_COLOR = Cypress.env('TAG_COLOR');
    const DESCRIPTION = Cypress.env('DESCRIPTION');

    cy.visit(LOCAL_HOST + "#/tags/new");
    cy.wait(2000);
    cy.get('input[data-test-input="tag-name"]').type(NAME_TAG_1);
    cy.get('input[data-test-input="accentColor"]').type(TAG_COLOR);
    cy.get('textarea[data-test-input="tag-description"]').type(DESCRIPTION);
    cy.wait(1000);
    cy.get('span[data-test-task-button-state="idle"]').click();
    cy.wait(1000);

    cy.visit(LOCAL_HOST + "#/tags/new");
    cy.wait(1000);
    cy.get('input[data-test-input="tag-name"]').type(NAME_TAG_2);
    cy.get('input[data-test-input="accentColor"]').type(TAG_COLOR);
    cy.get('textarea[data-test-input="tag-description"]').type(DESCRIPTION);
    cy.wait(1000);
    cy.get('span[data-test-task-button-state="idle"]').click();
    cy.wait(2000);
});

// Handle uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
});
