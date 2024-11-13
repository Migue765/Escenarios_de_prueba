describe('Edit an existing tag and save the changes', () => {
    const EMAIL = "juanes.reich@gmail.com";
    const PASSWORD = "6-pVzAeXxT9Uq_-";
    const NEW_NAME_TAG = 'Edited Spectacular Tag';

    before(() => {
        cy.visit("http://localhost:2369/ghost/");
    });

    it('Edit an existing tag and save the changes', () => {
        cy.get('input[type="email"]').type(EMAIL);
        cy.wait(2000);
        cy.get('input[type="password"]').type(PASSWORD);
        cy.wait(2000);
        cy.get('span[data-test-task-button-state="idle"]').click();
        cy.wait(4000);

        cy.get('a[data-test-nav="tags"]').click();
        cy.wait(2000);

        cy.get('li[data-test-tag="67319324f870feddc91b3a9a"] a[title="Edit tag"]').eq(2).click();
        cy.wait(2000);

        cy.get('input[data-test-input="tag-name"]').clear().type(NEW_NAME_TAG); // Edita el nombre de la etiqueta
        cy.wait(2000);

        cy.get('span[data-test-task-button-state="idle"]').click(); // Guarda los cambios
        cy.wait(2000);

        cy.get('a[data-test-nav="tags"]').click();
        cy.wait(4000); // Espera por la carga de la lista de etiquetas
    });
});
