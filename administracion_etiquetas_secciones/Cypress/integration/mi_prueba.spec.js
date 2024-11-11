describe('Mi primera prueba', () => {
    it('visita la página web', () => {
        cy.visit('https://ejemplo.com'); // Cambia a la URL que desees probar
        cy.contains('Texto que debería estar en la página');
    });
});
