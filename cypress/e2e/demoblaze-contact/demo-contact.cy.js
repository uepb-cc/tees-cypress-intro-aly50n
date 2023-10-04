import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("Eu entro na URL Base", () => {
	const url = Cypress.env('BASE_URL');
    cy.visit(url);
});

When("Eu clico no botao Contact", () => {
	cy.get(':nth-child(2) > .nav-link').click();
});

When("Eu digito {string} no campo de email do formulario", (email) => {
	cy.get('#recipient-email').type(email);
});

When("Eu digito {string} no campo nome de contato do formulario", (nome) => {
	cy.get('#recipient-name').type(nome);
});

When("Eu digito {string} no campo de mensagem do formulario", (menssagem) => {
	cy.get('#message-text').type(menssagem);
});

Then("Eu clico no botao Send Message para enviar a mensagem", () => {
	cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
});
