import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
Given("I go to the URL_ANDROID", () => {
    cy.visit('/Projeto-Site-Android');
});

When(/^I visit the website$/, () => {
	return true;
});

When(/^I navigate to the page$/, () => {
	return true;
});

Then(/^the text "([^"]*)" should be visible on the website.$/, (result) => {
    cy.get('body').should('contain', result);
	return true;
});
