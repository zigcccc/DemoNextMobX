describe('Homescreen', () => {
	it('Successfully loads', () => {
		cy.visit('/');
		cy.get('h1').should('contain', 'Non-Contact Deliveries');
	});

	it('Should update orders count', () => {
		cy.visit('/');
		cy.get('#ordersCount').then(($span) => {
			const initialValue = parseInt($span.text());
			cy.get('button[id=addOrderButton]')
				.click()
				.then(() => {
					const updatedValue = parseInt($span.text());
					expect(updatedValue).to.eq(initialValue + 1);
				});
		});
	});

	it('Should have disabled "Go to checkout" button if ordersCount < 10', () => {
		cy.visit('/');
		cy.get('#goToCheckout').should('be.disabled');
		for (let i = 0; i < 10; i++) {
			cy.get('#addOrderButton').click();
		}
		cy.get('#goToCheckout').should('not.be.disabled');
	});

	it('Should go to checkout page on button click', () => {
		cy.visit('/');
		for (let i = 0; i < 10; i++) {
			cy.get('#addOrderButton').click();
		}
		cy.get('#goToCheckout').click();
		cy.url().should('include', '/checkout');
	});
});
