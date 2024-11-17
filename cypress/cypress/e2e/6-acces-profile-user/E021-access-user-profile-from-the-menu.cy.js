describe('Access profile: access menu profile ', () => {

    const LOCAL_HOST = Cypress.env('LOCAL_HOST');
    const SCREENSHOT_PATH = '6-acces-profile-user/E021-access-user-profile-from-the-menu/acces-menu-profile';
    let screenshotCounter = 1;

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

    it('Acces menu profile', () => {

        cy.visit(LOCAL_HOST + "#/dashboard");
        cy.wait(2000);
        takeScreenshot();

        // click profile section
        cy.get('div.gh-user-avatar.relative').click();
        takeScreenshot();
        cy.get('.dropdown-menu.dropdown-triangle-top').should('be.visible');
        cy.get('a[data-test-nav="user-profile"').click();
        takeScreenshot();
        cy.url().should('include', '/ghost/#/settings/staff/jaime');
        takeScreenshot();

    });



 
});