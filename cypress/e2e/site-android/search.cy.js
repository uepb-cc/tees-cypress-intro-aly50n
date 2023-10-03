
Given("I enter the URL ANDROID", () => {
    cy.visit('https://aly50n.github.io/Projeto-Site-Android/');
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
