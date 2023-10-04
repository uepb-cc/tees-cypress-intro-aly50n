import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("Eu entro na URL Base", () => {
	const url = Cypress.env('BASE_URL');
    cy.visit(url);
});

When("Eu clico no botao Sign up", () => {
	cy.get('#signin2').eq(0).click();
});

When(/^Eu digito "([^"]*)" no campo username do sign up$/, (username) => {
	cy.get('#sign-username').type(username);
});

When("Eu digito o meu PASSWORD no campo password do sign up", () => {
	const PASSWORD = Cypress.env('CYPRESS_PASSWORD');
    cy.get('#sign-password').type(PASSWORD);
});

Then("Eu clico no botao Sign up e realizo o cadastro com sucesso", () => {
	cy.get('.btn-primary').eq(1).click();
});

When("eu clico no botao Log in", () => {
	cy.get('#login2').eq(0).click();
});

When("Eu digito {string} no campo username do login", (username) => {
	cy.get('#loginusername').type(username);
});

When("Eu digito o meu PASSWORD no campo password do login", () => {
    const PASSWORD = Cypress.env('CYPRESS_PASSWORD');
	cy.get('#loginpassword').type(PASSWORD);
});

Then("Eu clico no botao Log in e realizo o login com sucesso", () => {
	cy.get('.btn-primary').eq(2).click();
});
