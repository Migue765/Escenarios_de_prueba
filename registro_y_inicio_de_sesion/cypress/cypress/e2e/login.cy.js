describe('Login and Title Validation', () => { 

    it('should show an error message when the password is incorrect', () => {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(3000); 
    
        cy.get('input[name="identification"]').type('a.arandio@uniandes.edu.co'); 
        cy.wait(3000);
    
        cy.get('input[name="password"]').type('12345689.'); 
        cy.wait(3000);
    
        cy.get('button[type="submit"]').click(); 
        cy.wait(3000);
        cy.get('.main-error')
          .should('contain', 'Your password is incorrect.');
      });
    
    
    it('should log in successfully and redirect to the dashboard', () => {
      cy.visit('http://localhost:2368/ghost/#/signin');
      cy.wait(3000); 
  
      cy.get('h1').should('contain', 'Test Cypress'); 
  
      cy.get('input[name="identification"]').type('a.arandio@uniandes.edu.co');
      cy.wait(3000);
  
      cy.get('input[name="password"]').type('.987654321.*');
      cy.wait(3000);
  
      cy.get('button[type="submit"]').click(); 
      cy.wait(3000);

      cy.url().should('include', '/ghost/#/dashboard'); 
    });

  
  });