// gestion_contenido/cypress/cypress/e2e/delete_page.cy.test.js

describe('Delete page tests', () => {
  // Manejar excepciones no capturadas
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve false para evitar que Cypress falle la prueba
    return false;
  });

  beforeEach(() => {
    // Log in before each test
    cy.visit('http://localhost:2369/ghost/#/signin');
    cy.get('#identification').type('john.doe@example.com');
    cy.get('#password').type('contra-contra-seña-123');
    cy.get('[data-test-task-button-state="idle"]').click();
    cy.url().should('include', '/ghost/#/dashboard');
  });

  it('should navigate to the pages section', () => {
    // Verificar que el usuario ha iniciado sesión correctamente
    cy.url().should('include', '/ghost/#/dashboard');

    // Entrar en la sección de páginas
    cy.get('[data-test-nav="pages"]').click();
    cy.url().should('include', '/ghost/#/pages');

    // Crear una nueva página
    cy.get('[data-test-new-page-button]').click();
    cy.wait(2000);
    cy.url().should('include', '/ghost/#/editor/page');


    // Esperar a que el editor esté visible
    cy.get('.gh-editor-title', { timeout: 10000 }).should('be.visible');

    // Llenar el formulario de la nueva página
    cy.get('.gh-editor-title').type('Mi primera página{enter}');
    cy.get('[data-secondary-instance="false"]').type("hola")

    // Publicar la página
    cy.get('[data-test-button="publish-flow"]').first().click();
    cy.get('[data-test-button="continue"]').click();
    cy.get('[data-test-button="confirm-publish"]').click();

    // Hacer clic en el botón de cerrar
    cy.get('[data-test-button="close-publish-flow"]').click();
    // Verificar que la página ha sido publicada
    cy.url().should('include', '/ghost/#/pages');
  });

  it('should delete the selected page', () => {
    cy.get('[data-test-nav="pages"]').click();
    cy.url().should('include', '/ghost/#/pages');
    cy.get('.gh-posts-list-item').first().click();
    cy.url().should('include', '/editor/page/');
    cy.get('[data-test-psm-trigger]').click();
    cy.get('.settings-menu-delete-button').click();
    cy.get('.modal-footer .gh-btn-red').click();
    cy.url().should('include', '/ghost/#/pages');
    cy.get('.gh-posts-list-item').should('not.exist');
  });
});
