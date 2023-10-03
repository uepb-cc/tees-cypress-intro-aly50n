import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("Eu entro na URL Base", () => {
    const url = Cypress.env('BASE_URL');
    cy.visit(url);
});

When("Eu digito {string} na caixa de pesquisa", (searchTerm) => {
    this.searchTerm = searchTerm;
    cy.get('.gLFyf').type(searchTerm);
});

Then("o texto {string} pode ser visto no site {string}", (result, site) => {
    if(site === 'google.com') {
        cy.get('body').should('contain', result);
    } else {
        this.result = result;
        cy.origin(site, { args: { result } }, ( { result }) => {
            cy.get('body').contains(result);
        });
    }
});

When(/^Eu clico no botao "([^"]*)"$/, function (button) {
    switch (button) {
        case 'estou com sorte':
            cy.get('input[name="btnI"]').eq(0).click();
            break;
        case 'pesquisar':
            cy.get('input[name="btnK"]').eq(0).click({ force: true });
            break;
        default:
            throw new Error(`Botao desconhecido: ${button}`);
    }
});