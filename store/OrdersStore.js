import { observable, computed, action, runInAction } from 'mobx';
import axios from 'axios';

class OrdersStore {
	@observable orders = [];
	@observable customerName = null;
	@observable state = 'inactive';
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

	@action
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

export default OrdersStore;
