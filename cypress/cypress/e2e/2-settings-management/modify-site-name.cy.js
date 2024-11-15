describe('Modify Site Name', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    it('Modify the site name in the general settings and verify the change in the interface', () => {
        cy.visit(LOCAL_HOST + "#/settings");
        cy.get('#admin-x-settings-scroller > div > div:nth-child(1) > div > div:nth-child(1) > div.flex.items-start.justify-between.gap-4 > div:nth-child(2) > div > button').click();
        cy.get('input[placeholder="Site title"]').clear()
        cy.get('input[placeholder="Site title"]').type('New title site');
        cy.get('#admin-x-settings-scroller button.cursor-pointer.bg-green').click();
        cy.reload();
        cy.contains('New title site').should('exist');
    });
});
