import { observable, computed, action } from 'mobx';

class OrdersStore {
	@observable orders = [];
	minOrders = 10;

	@computed
	get ordersCount() {
		return this.orders.length;
	}

	@computed
	get neededOrdersLeft() {
		return this.minOrders - this.ordersCount;
	}

	@computed
	get validNumOfOrders() {
		return this.neededOrdersLeft === 0;
	}

	@action
	addOrder = (order) => {
		this.orders = [...this.orders, order];
	};

	@action
	resetOrders = () => {
		this.orders = [];
	};
}

export default OrdersStore;
