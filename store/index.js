import React from 'react';

import OrdersStore from './OrdersStore';

const storesContext = React.createContext({
	ordersStore: new OrdersStore(),
});

export default storesContext;
