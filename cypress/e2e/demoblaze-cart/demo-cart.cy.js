import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("Eu entro na URL Base", () => {
	const url = Cypress.env('BASE_URL');
    cy.visit(url);
});

When("Eu clico no primeiro produto", () => {
	cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('exist').click();
	cy.wait(1000);
});

When("As informaçoes do produto abrem eu clico no botao Add to cart para adicionar o produto no carrinho", () => {
	cy.get('.col-sm-12 > .btn').should('exist').click(); 
});

When("Eu clico no botao Cart", () => {
	cy.get('#cartur').should('exist').click();
	cy.wait(1000);
});

Then("O meu carrinho abre e eu clico no botao delete para remover o produto do carrinho", () => {
	cy.get('.success > :nth-child(4) > a').should('exist').click();
});
