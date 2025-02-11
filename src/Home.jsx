import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
    let dispatch = useDispatch();
  let Vegitems = useSelector(state => state.products.Veg);

  let finalitems = Vegitems.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <img src={item.image} className="card-img-top" alt={item.name}style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title text-success">{item.name}</h5>
          <p className="card-text text-danger">Price: ${item.price}</p>
          <button className="btn btn-warning w-100" onClick={() => dispatch(addToCart(item))}> 🛒 Add to Cart </button>
        </div>
      </div>
    </div>
  ))
  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <div style={styles.overlay}>
          <div style={styles.content}>
            <h1 style={styles.title}>Delicious Food Delivered To Your Door</h1>
            <p style={styles.subtitle}>Order your favorite meals from local restaurants and enjoy fast delivery</p>
            <div style={styles.buttonContainer}>
              <a href='/veg' style={styles.orderButton}>Order Now</a>
              <a href='/nonveg' style={styles.exploreButton}>Explore Menu</a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-success my-4">🥦 Vegitable Order Items 🥦</h1>
      <div className="container">
        <div className="row">{finalitems}</div>
      </div>

      <div style={styles.featureSection}>
        <h2 style={styles.featureTitle}>Why Choose Us?</h2>
        <div style={styles.features}>
          <div style={styles.feature}>
            <h3>Fresh Ingredients</h3>
            <p>We use only the freshest ingredients to bring you delicious and healthy meals.</p>
          </div>
          <div style={styles.feature}>
            <h3>Fast Delivery</h3>
            <p>Your meals are delivered quickly and safely, so you can enjoy them fresh and hot.</p>
          </div>
          <div style={styles.feature}>
            <h3>Easy Payment</h3>
            <p>We offer multiple payment methods for your convenience, ensuring a hassle-free experience.</p>
          </div>
        </div>
      </div>
      
      <footer style={styles.footer}>
        <p>&copy; 2025 Foodies. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  },
  heroSection: {
    minHeight: '100vh',
    backgroundImage: 'url("https://www.example.com/food-hero.jpg")', // Use a relevant food hero image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text contrast
    width: '100%',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '15px',
  },
  content: {
    color: 'white',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  orderButton: {
    backgroundColor: '#ff6f61',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.2rem',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  exploreButton: {
    backgroundColor: '#f9a825',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.2rem',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  orderButtonHover: {
    backgroundColor: '#e04e46',
  },
  exploreButtonHover: {
    backgroundColor: '#f57f17',
  },
  featureSection: {
    padding: '50px 20px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  },
  featureTitle: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: '#333',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  feature: {
    width: '30%',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  footer: {
    padding: '20px 0',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
  },
};

export default Home;
