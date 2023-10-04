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

When("O meu carrinho abre entao clico no botao Place Order", () => {
	cy.get('.col-lg-1 > .btn').should('exist').click();
    cy.wait(1000);
});

When("Eu preencho os campos no formulario com o nome {string} o estado {string} a cidade {string} o cartao de credito {string} o mes {string} e o ano {string}", (nome, estado, cidade, cartao, mes, ano) => {
    cy.get('#name').type(nome);
    cy.get('#country').type(estado);
    cy.get('#city').type(cidade);
    cy.get('#card').type(cartao);
    cy.get('#month').type(mes);
    cy.get('#year').type(ano);
});

Then("Eu clico no botao Purchase e OK para finalizar a compra",()=>{
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('exist').click();
    cy.get('.confirm').should('exist').click();
});