import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import './App.css';

function Milk() {
  let dispatch = useDispatch();

  let Milkitems = useSelector((state) => state.products.Milk);

  let finalitems = Milkitems.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <img src={item.image} className="card-img-top" alt={item.name} style={{ width: "90%", height: "140px", objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title text-success">{item.name}</h5>
          <p className="card-text text-danger">Price: ${item.price}</p>
          <button 
            className="btn btn-warning w-100" 
            onClick={() => dispatch(addToCart(item))}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="text-center text-primary my-4">🍶 Milk Order Items 🍶</h1>
      <div className="container">
        <div className="row">{finalitems}</div>
      </div>
    </>
  );
}

export default Milk;
