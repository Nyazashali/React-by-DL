import Order from '../components/Order';

function Orders() {
    const orders = [
        {
            orderId: 101,
            customerName: "John Doe",
            items: [
                { name: "Laptop", quantity: 1, price: 1200 },
                { name: "Mouse", quantity: 2, price: 25 },
               
            ],
          
            totalAmount: 1250,
            orderDate: "2025-01-25",
        },
        {
            orderId: 102,
            customerName: "Jane Smith",
            items: [
                { name: "Desk Chair", quantity: 1, price: 150 },
                { name: "Notebook", quantity: 5, price: 5 },
            ],
            totalAmount: 175,
            orderDate: "2025-01-24",
        },
        {
            orderId: 103,
            customerName: "Alice Johnson",
            items: [
                { name: "Monitor", quantity: 2, price: 300 },
                { name: "Keyboard", quantity: 1, price: 75 },
            ],
            totalAmount: 675,
            orderDate: "2025-01-23",
        },
        {
            orderId: 104,
            customerName: "Bob Brown",
            items: [
                { name: "Tablet", quantity: 1, price: 500 },
                { name: "Tablet Cover", quantity: 1, price: 50 },
            ],
            totalAmount: 550,
            orderDate: "2025-01-22",
        },
        {
            orderId: 105,
            customerName: "Eve Wilson",
            items: [
                { name: "Smartphone", quantity: 1, price: 800 },
                { name: "Charger", quantity: 1, price: 20 },
            ],
            totalAmount: 820,
            orderDate: "2025-01-21",
        },
    ];

    return (
        <div>
            <div className="flex flex-wrap">
                {orders.map((order) => (
                    <div className="w-96 p-4">
                        <Order key={order.orderId} order={order} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Orders;
