// Import all commands from the original commands.js file
import '../../cypress/support/commands.js';

// Handle uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
});
