describe('Create user and login', () => {
  // Manejar excepciones no capturadas
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve false para evitar que Cypress falle la prueba
    return false;
  });
  it('creates a new user and logs in', () => {
    cy.visit('http://localhost:2369/ghost/#/setup');

    cy.wait(5000);
    // Verificar si estamos en la página de configuración o de inicio de sesión
    cy.url().then((url) => {
      if (url.includes('/setup')) {
        // Llenar el formulario de creación de usuario
        cy.get('#blog-title').type('My Blog');
        cy.get('#name').type('John Doe');
        cy.get('#email').type('john.doe@example.com');
        cy.get('#password').type('contra-contra-seña-123');
        cy.get('[data-test-button="setup"]').click();

        // Esperar a que se complete la creación del usuario
        cy.wait(5000);
      } else {
        // Iniciar sesión con el usuario existente
        cy.visit('http://localhost:2369/ghost/#/signin');
        cy.get('#identification').type('john.doe@example.com');
        cy.get('#password').type('contra-contra-seña-123');
        cy.get('[data-test-task-button-state="idle"]').click();
      }
    });

    // Verificar que el usuario ha iniciado sesión correctamente
    cy.url().should('include', '/ghost/#/dashboard');

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
});
