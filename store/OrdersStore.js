import { observable, computed, action, runInAction, decorate } from 'mobx';
import axios from 'axios';

class OrdersStore {
	orders = [];
	customerName = null;
	state = 'inactive';
	minOrders = 10;

	get ordersCount() {
		return this.orders.length;
	}

	get neededOrdersLeft() {
		return this.minOrders - this.ordersCount;
	}

	get validNumOfOrders() {
		return this.neededOrdersLeft === 0;
	}

	addOrder = (order) => {
		this.orders = [...this.orders, order];
	};

	deleteOrder = (id) => {
		this.orders = this.orders.filter((order) => order.id !== id);
	};

	resetOrders = () => {
		this.orders = [];
	};

	getCustomerName = async () => {
		this.state = 'loading';
		try {
			const { data } = await axios.get(
				'http://localhost:3000/api/hello?name=Ziga'
			);
			runInAction(() => {
				const { name } = data;
				this.state = 'done';
				this.customerName = name;
			});
		} catch (error) {
			console.error(error);
			runInAction(() => {
				this.state = 'error';
			});
		}
	};
}

decorate(OrdersStore, {
	orders: observable,
	customerName: observable,
	state: observable,
	ordersCount: computed,
	neededOrdersLeft: computed,
	validNumOfOrders: computed,
	addOrder: action,
	deleteOrder: action,
	resetOrders: action,
	getCustomerName: action,
});

export default OrdersStore;
