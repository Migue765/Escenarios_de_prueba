describe('Create user and login', () => {
  // Manejar excepciones no capturadas
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve false para evitar que Cypress falle la prueba
    return false;
  });
  it('creates a new user and logs in', () => {
    cy.visit('http://localhost:2368/ghost/#/setup');

    cy.wait(2000);
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
        cy.visit('http://localhost:2368/ghost/#/signin');
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
    cy.get('[data-test-nav="members"]').click();
    cy.url().should('include', '/ghost/#/members');

    // Crear una nueva página
    cy.get('[data-test-new-member-button]').click();
    cy.wait(2000);
    cy.url().should('include', '/ghost/#/members/new');

    cy.get('[data-test-input="member-name"]').type('John Doe');
    cy.get('[data-test-input="member-email"]').type('test2a25@test.com');
    cy.get('.ember-power-select-trigger-multiple-input').type('Test Label{enter}');
    cy.get('[data-test-input="member-note"]').type('Test Note');

    cy.get('[data-test-button="save"]').click();

    cy.url().should('include', '/ghost/#/members');
  });
});
