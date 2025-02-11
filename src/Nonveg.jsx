import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import './App.css';

function Nonveg() {
  let dispatch = useDispatch();

  let Nonvegitems = useSelector((state) => state.products.Nonveg);

  let Result = Nonvegitems.map((item, index) =>
    <div className="col-md-4 mb-4" key={index}>
      <div className="card shadow-sm">
        <img src={item.image} className="card-img-top" alt={item.name} width={60}  height={100} />
        <div className="card-body">
          <h5 className="card-title">{item.name} 🍗</h5>
          <p className="card-text">${item.price}</p>
          <button
            className="btn btn-warning btn-block"
            style={{ fontSize: "16px" }}
            onClick={() => dispatch(addToCart(item))}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <h1 className="text-center text-primary mb-4">🍽️ Non-Veg Order Items 🍗</h1>
      <div className="container">
        <div className="row">{Result}</div>
      </div>
    </>
  );
}

export default Nonveg;
