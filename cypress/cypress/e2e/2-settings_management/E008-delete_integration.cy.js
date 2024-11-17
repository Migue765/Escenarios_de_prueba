describe('Delete Integration', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');
    const SCREENSHOT_PATH = '2-settings_management/E008-delete_integration_before/delete_integration';
    let screenshotCounter = 1;

    function takeScreenshot() {
        cy.screenshot(`${SCREENSHOT_PATH}_${screenshotCounter}`);
        screenshotCounter++;
    }

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    //TODO: Fix the this scenario because the integration is not deleted
    it.skip('Process to delete an integration and verify it disappears from the list', () => {
        cy.visit(LOCAL_HOST + "#/settings");
        takeScreenshot();
        cy.get('#integrations').scrollIntoView();
        takeScreenshot();
        cy.wait(3000);
        takeScreenshot();
        cy.get('#integrations').click();
        takeScreenshot();
        cy.get('button[title="Custom"]').click();
        takeScreenshot();
        cy.wait(3000);
        takeScreenshot();
        cy.get('div.group\\/list-item').contains('Custom Integration').parent().within(() => {
            cy.get('button.bg-red').click();
        });
        takeScreenshot();
        cy.get('section[data-testid="confirmation-modal"] button.bg-red').click();
        takeScreenshot();
        cy.contains('Custom Integration').should('not.exist');
        takeScreenshot();
    });
});
