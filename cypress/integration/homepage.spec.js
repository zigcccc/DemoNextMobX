describe('My First Test', () => {
	it('Successfully loads', () => {
		cy.visit('/');
		cy.get('.title').should('contain', 'welcome');
	});
});
