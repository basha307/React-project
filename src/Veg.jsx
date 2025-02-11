import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import './App.css';

function Veg() {
  let dispatch = useDispatch();
  let Vegitems = useSelector(state => state.products.Veg);

  let finalitems = Vegitems.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <img src={item.image} className="card-img-top" alt={item.name}style={{ width: "40%", height: "80px", objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title text-success">{item.name}</h5>
          <p className="card-text text-danger">Price: ${item.price}</p>
          <button className="btn btn-warning w-100" onClick={() => dispatch(addToCart(item))}> 🛒 Add to Cart </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="text-center text-success my-4">🥦 Vegetable Order Items 🥦</h1>
      <div className="container">
        <div className="row">{finalitems}</div>
      </div>
    </>
  );
}

export default Veg;
