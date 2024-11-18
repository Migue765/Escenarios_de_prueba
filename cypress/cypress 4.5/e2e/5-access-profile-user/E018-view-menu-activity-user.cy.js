describe('Access profile: View menu activity user', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');
    const SCREENSHOT_PATH = '5-access_profile_user/E018-view_date_user_profile_before/view_date_user_profile';
    let screenshotCounter = 1;
    const NAME = Cypress.env('NAME');

    function takeScreenshot() {
        cy.screenshot(`${SCREENSHOT_PATH}_${screenshotCounter}`);
        screenshotCounter++;
    }

    beforeEach("Precondition: Admin login", () => {
        cy.LoginGhost();
    });

    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
    });

    it('View menu activity user', () => {

        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(2000);
        takeScreenshot();
        cy.get('div.gh-user-avatar.relative').click();
        takeScreenshot();
        cy.get('.dropdown-menu.dropdown-triangle-top').should('be.visible');
        cy.get('a[data-test-nav="user-profile"').click();
        takeScreenshot();
        cy.get('button').contains('Actions').click({force: true});
        takeScreenshot();
        cy.get('button').contains('View user activity').should('be.visible');

    });
});