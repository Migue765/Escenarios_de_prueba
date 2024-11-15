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

// Handle uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
});
