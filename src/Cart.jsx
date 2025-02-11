import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, addPurchaseDetails, clearCart, addToCart, remove } from "./Store";
import { useState } from "react";

function Cart() {
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  
  let cartItem = cart.map((item, index) => (
    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
      {item.name} - ₹{item.price}
      <div>
        <button className="btn btn-outline-primary btn-sm me-2" onClick={() => dispatch(increment(item))}>+</button>
        <button className="btn btn-outline-primary btn-sm me-2" onClick={() => dispatch(decrement(item))}>-</button>
        Quantity: {item.quantity}
        <button className="btn btn-outline-danger btn-sm ms-2" onClick={() => dispatch(remove(item))}>Remove</button>
      </div>
    </li>
  ));

  let totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  let [discount, setDiscount] = useState(0);
  let [couponCode, setCouponCode] = useState('');
  let [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);

  let discountAmount = totalPrice * discount / 100;
  let finalAmount = totalPrice - discountAmount;

  let handlingCouponCodePer = () => {
    const coupon = couponCode.toUpperCase();
    switch (coupon) {
      case 'IRFAN10':
        setCouponCodeDiscountPer(10);
        break;
      case 'IRFAN20':
        setCouponCodeDiscountPer(20);
        break;
      case 'IRFAN30':
        setCouponCodeDiscountPer(30);
        break;
      case 'IRFAN40':
        setCouponCodeDiscountPer(40);
        break;
      default:
        alert('Invalid coupon code');
        setCouponCodeDiscountPer(0);
    }
  };

  let couponDiscountAmount = totalPrice * couponCodeDiscountPer / 100;
  let finalAmountWithCoupon = finalAmount - couponDiscountAmount;

  let handleCompletePurchase = () => {
    const purchaseDate = new Date().toLocaleDateString();
    let purchaseDetails = {
      Date: purchaseDate,
      item: [...cart],
      totalPrice: totalPrice,
    };

    dispatch(clearCart());
    dispatch(addPurchaseDetails(purchaseDetails));
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="container py-5">
          <h1 className="text-center text-warning">Your Cart</h1>
          <div className="card shadow-lg">
            <div className="card-body">
              <h4 className="card-title text-center">Cart Items</h4>
              <ul className="list-group mb-4">
                {cartItem}
              </ul>
              <p className="text-success fs-5 fw-bold">Total Price: ₹{totalPrice}</p>

              {/* Discount Section */}
              {discount > 0 && (
                <div className="mb-3">
                  <p>Your Discount: {discount}%</p>
                  <p>Your Discount Amount: ₹{discountAmount.toFixed(2)}</p>
                </div>
              )}

              <p className="text-info fs-5">Your Net Amount to Pay: ₹{finalAmount.toFixed(2)}</p>

              <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-info" onClick={() => setDiscount(10)}>Apply 10% Discount</button>
                <button className="btn btn-info" onClick={() => setDiscount(20)}>Apply 20% Discount</button>
                <button className="btn btn-info" onClick={() => setDiscount(30)}>Apply 30% Discount</button>
                <button className="btn btn-danger" onClick={() => setDiscount(0)}>Reset Discount</button>
              </div>

              {/* Coupon Code Section */}
              <div className="mb-3">
                <input 
                  type="text" 
                  value={couponCode} 
                  onChange={(e) => setCouponCode(e.target.value)} 
                  className="form-control" 
                  placeholder="Enter coupon code"
                />
              </div>
              <button className="btn btn-warning mb-3" onClick={handlingCouponCodePer}>Apply Coupon</button>

              {couponDiscountAmount > 0 && (
                <div className="mb-3">
                  <p className="text-danger">Your Coupon Code Discount Amount: ₹{couponDiscountAmount.toFixed(2)}</p>
                </div>
              )}

              <p className="text-success fs-5">Final Amount After Coupon: ₹{finalAmountWithCoupon.toFixed(2)}</p>

              {/* Complete Purchase Button */}
              <div className="d-flex justify-content-center">
                <button className="btn btn-success" onClick={handleCompletePurchase}>Complete Purchase</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-center text-purple-600">Your Cart is Empty</h2>
      )}
    </>
  );
}

export default Cart;
