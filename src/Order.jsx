import { useSelector } from "react-redux";

function Order() {
  // Get the purchase history from the store
  const purchaseHistory = useSelector((state) => state.purchaseDetails);

  // Check if purchaseHistory is available and is an array
  if (!Array.isArray(purchaseHistory)) {
    return <p>Error: Invalid purchase history data.</p>;
  }

  // Convert the above object into list items
  const finalDate = purchaseHistory.map((purchase, index) => (
    <li key={index} className="list-group-item bg-info text-white mb-3">
      {/* Date and total price directly */}
      <div>
        <p className="fw-bold"><span className="text-warning">Date:</span> {purchase.Date}</p>
        <p className="fw-bold"><span className="text-success">Total Amount:</span> ${purchase.totalPrice.toFixed(2)}</p>
      </div>

      {/* All items being read using map */}
      <ul className="list-group">
        {purchase.item.map((item, itemIndex) => (
          <li key={itemIndex} className="list-group-item bg-light text-dark">
            <span className="text-primary">{item.name}</span> - ${item.price} * {item.quantity}
          </li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">🎉 Purchase History 🎉</h1>
      {purchaseHistory.length === 0 ? (
        <h2 className="text-center text-danger">🚨 No Purchase History Available 🚨</h2>
      ) : (
        <ul className="list-group">
          {finalDate}
        </ul>
      )}
    </div>
  );
}

export default Order;
