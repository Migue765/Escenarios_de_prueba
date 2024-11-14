Cypress.Commands.add('LoginGhost', () => {
    cy.session("Login", () => {
        cy.visit(Cypress.env('LOCAL_HOST'));
        cy.get('input[name="identification"]').type(Cypress.env('EMAIL'));
        cy.get('input[name="password"]').type(Cypress.env('PASSWORD'));
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/ghost/#/dashboard');
    });
});
