
describe('User Registration in Ghost', () => {

  beforeEach(() => {
    cy.visit('http://localhost:2368/ghost/#/setup');
  });

  it('I create a registration with an invalid email', () => {
    cy.wait(3000);
    cy.get('input[name="blog-title"]').type('Test Cypress');
    cy.wait(3000);
    cy.get('input[name="name"]').type('Natalia Arandio');
    cy.wait(3000);
    cy.get('input[name="email"]').type('a.aaaaaa'); 
    cy.wait(3000);
    cy.get('input[name="password"]').type('a.aaaaaa'); 
    cy.wait(3000);
    cy.get('p.response').should('contain', 'Invalid Email.');
  });


  it('I leave the fields blank during registration', () => {
    cy.get('[data-test-button="setup"]').click();

      cy.get('p.response').should('contain', 'Please enter a site title.');
      cy.get('p.response').should('contain', 'Please enter a name.');
      cy.get('p.response').should('contain', 'Please enter an email.');
      cy.get('p.response').should('contain', 'Password must be at least 10 characters long.');
  });


  it('I complete registration and validate the dashboard', () => {
    cy.wait(3000);
    cy.get('input[name="blog-title"]').type('Test Cypress');
    cy.wait(3000);
    cy.get('input[name="name"]').type('Natalia Arandio');
    cy.wait(3000);
    cy.get('input[name="email"]').type('a.arandio@uniandes.edu.co');
    cy.wait(3000);
    cy.get('input[name="password"]').type('.987654321.*');
    cy.wait(3000);
    
    cy.get('[data-test-button="setup"]').click();
    
    cy.wait(5000); 

    cy.url().should('include', '/ghost/#/dashboard');
  });



});