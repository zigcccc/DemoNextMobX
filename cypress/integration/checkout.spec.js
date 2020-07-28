describe('Checkout', () => {
	it('Successfully loads', () => {
		cy.visit('/checkout');
		cy.get('h1').should('contain', 'Congrats');
	});

	it('Should redirect to home if no orders', () => {
		cy.visit('/checkout');
		cy.url().should('not.contain', '/checkout');
	});

	it('Should render orders if correct num of orders', () => {
		cy.visit('/');
		for (let i = 0; i < 10; i++) {
			cy.get('#addOrderButton').click();
		}
		cy.get('#goToCheckout').click();
		cy.get('#ordersContainer > p').should('have.length', 10);
	});

	it('Should redirect back to home when clicking the repeat button', () => {
		cy.visit('/');
		for (let i = 0; i < 10; i++) {
			cy.get('#addOrderButton').click();
		}
		cy.get('#goToCheckout').click();
		cy.get('#repeatButton')
			.click()
			.then(() => {
				cy.url().should('not.contain', '/checkout');
			});
	});
});
