function Order(props) {
    const { order } = props;
    console.log(order);
    return (
        <div className="shadow p-4 bg-gray-100">
            <div className="border-b bg-gray-300"> 
                <h2>OrderId: <span>{order.orderId}</span></h2>
            </div>
            <div className="border-b bg-gray-300">
                <h2>CustomerName: <span>{order.customerName}</span></h2>
                <h2>Total: <span>{order.totalAmount}</span></h2>
            </div>
            <div className="border-b bg-gray-300">
                <h2>Items</h2>
                {order.items.map(items => {
                    <h2>{items.name} - {items.price}</h2>
                })}
                <div className="border-b bg-gray-300">
                    <h2>OrderDate: {order.orderDate}</h2>
                </div>
            </div>
        </div>
    );
}

export default Order;
