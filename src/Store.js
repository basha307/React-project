import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define the product slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    Veg: [
      { name: "Tomato", price: 50,image:"https://th.bing.com/th/id/OIP.kvhd4pDdoEqaKpsCnkTCdwHaE7?w=295&h=196&c=7&r=0&o=5&pid=1.7"},
      { name: "Potato", price: 80,image:"https://th.bing.com/th/id/OIP.NpLW37pDs95czjbN5KR25QHaE8?w=267&h=180&c=7&r=0&o=5&pid=1.7" },
      { name: "Carrot", price: 100,image:"https://th.bing.com/th/id/OIP.zDlnPHZ5mb3_W-SanNkVDQHaHa?w=194&h=195&c=7&r=0&o=5&pid=1.7" },
      { name: "Bringle", price: 130 ,image:"https://th.bing.com/th/id/OIP.bXfZbIOHBaIk0CxxnCgczAHaE6?w=240&h=180&c=7&r=0&o=5&pid=1.7"},
      { name: "Cabbage", price: 150 ,image:"https://th.bing.com/th/id/OIP.2T5VNwMGJVbQlY7x0bFYYAHaE8?w=250&h=180&c=7&r=0&o=5&pid=1.7"},
      { name:"Raddish", price:120,image:"https://th.bing.com/th/id/OIP.12EAo6HBfQGQeH3zoUv-iQHaH9?w=163&h=180&c=7&r=0&o=5&pid=1.7"},
      { name :"Dramstick" , price:40,image:"https://th.bing.com/th/id/OIP.GX--OhAyzbu2J39S4hLaKQHaG9?w=175&h=180&c=7&r=0&o=5&pid=1.7"},
      { name:"Spinach" ,price:25, image:"https://th.bing.com/th/id/OIP.DAip9m58mVXv1nTBQYzRuAHaFy?w=240&h=187&c=7&r=0&o=5&pid=1.7"},
      { name:"Chilli" ,price:90, image:"https://th.bing.com/th/id/OIP.bM2vlUkNbCePyU_WUEQ0oAHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7"},
      { name:"Cucumber" , price:35, image:"https://th.bing.com/th/id/OIP.uL7wI-YlkIIWtb6OGmAy4gHaEU?w=275&h=180&c=7&r=0&o=5&pid=1.7"},
      { name:"Garlick" ,price :160, image:"https://th.bing.com/th/id/OIP.5Lo7hPvr9V8qFPQPcKvcPgHaEo?w=279&h=180&c=7&r=0&o=5&pid=1.7"}
    ],
    Nonveg: [
      { name: "Egg", price: 20,image:"https://th.bing.com/th/id/OIP.z4Psmz7XFUCcm0A94ePxeAHaFB?w=275&h=186&c=7&r=0&o=5&pid=1.7" },
      { name: "Fish", price: 150,image:"https://th.bing.com/th/id/OIP.5eoT8wNta2GV-LDA7lq_CAHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7" },
      { name: "Chicken", price: 200,image:"https://th.bing.com/th/id/OIP.8x6TJgtFcQnmyD1hJvEKJQHaE8?w=284&h=189&c=7&r=0&o=5&pid=1.7" },
      { name: "Mutton", price: 500 ,image:"https://th.bing.com/th/id/OIP.1UZSt6BwOS1pSADB6dsvpQHaFj?w=231&h=180&c=7&r=0&o=5&pid=1.7"},
      { name: "Prawns", price: 1000,image:"https://th.bing.com/th/id/OIP.cFJNJ-0VO9xk5Bip-a516wHaEJ?w=313&h=180&c=7&r=0&o=5&pid=1.7" },
      { name: "Fried chicken",price:1200,image:"https://th.bing.com/th/id/OIP.L_GHbxdpqhu8XmtHroNcVwHaFj?w=206&h=180&c=7&r=0&o=5&pid=1.7"},
      { name:"Chicken 65" ,price:400,image:"https://ts3.mm.bing.net/th?id=OIP.jywuCi1RUZ6tT62Lv84KyQHaF4&pid=15.1"},
      { name:"Chicken starters" ,price:500, image:"https://th.bing.com/th/id/OIP.DfKVNNOJTnqtBnP5wC2kPgHaEK?w=300&h=180&c=7&r=0&o=5&pid=1.7"},
      { name:"Mutton fry" ,price: 700,image:"https://th.bing.com/th/id/OIP.UD2_6AgJ-rBhedCeCZwldQHaFW?w=219&h=180&c=7&r=0&o=5&pid=1.7"},
      { name:" Fish recipe",price: 300,image:" https://ts1.mm.bing.net/th?id=OIP.uQAwnG9BL5hnrZOWcPLW9gHaFK&pid=15.1"}
    ],
    Milk: [
      { name: "Gayatri", price: 20,image:"https://th.bing.com/th/id/OIP.lobYocM7IXVUNorCIHcrdwHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7" },
      { name: "Shakthi", price: 30,image:"https://th.bing.com/th/id/OIP.0CAB6-4l7HFstNdBZvEnWgHaDS?w=301&h=155&c=7&r=0&o=5&pid=1.7" },
      { name: "Amul ", price: 40,image:"https://th.bing.com/th/id/OIP.u3UnZtW3p31rCwZD96fV7QHaDe?w=336&h=164&c=7&r=0&o=5&pid=1.7"},
      { name: "Nandini", price: 50,image:"https://th.bing.com/th/id/OIP.tZoc-iTDriuyl43sOOIvrAHaE8?w=297&h=198&c=7&r=0&o=5&pid=1.7" },
      { name: "Premium", price: 100,image:"https://th.bing.com/th/id/OIP.Y8nHjBzc7rEFBlI4PYmSBAAAAA?w=248&h=159&c=7&r=0&o=5&pid=1.7" },
      { name: "Heritage",price:150,image:"https://th.bing.com/th/id/OIP.e5MdGWLyMaJt0OdRMeMHAQHaED?w=293&h=180&c=7&r=0&o=5&pid=1.7"}
    ]
  },
  reducers: {}
});

// Define the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter(item => item.name !== action.payload.name);
      }
    },
    remove: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },
    clearCart: () => {
      return [];
    },
  }
});

// Purchase details slice
const purchaseDetailsSlice = createSlice({
  name: "purchaseDetails",
  initialState: [],
  reducers: {
    addPurchaseDetails: (state, action) => {
      state.push(action.payload);
    }
  }
});


const authSlice=createSlice({
  name:"auth",
  initialState:{
    isAuthenticated:localStorage.getItem("username")?true:false,
    user :localStorage.getItem("username")||" ",
   },
   reducers:{
    login : (state,action)=>{
      state.isAuthenticated=true;
      state.user=action.payload;
      localStorage.setItem("username",action.payload);//store in local store
   },
   logout:(state)=>{
    state.isAuthenticated=false;
    state.user="";
    localStorage.removeItem("username");//local from local storage
   },
   },
  })

  // Configure the store
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    purchaseDetails: purchaseDetailsSlice.reducer,
    auth : authSlice.reducer
  },
})


// Export actions
export const { addToCart, increment, decrement, remove, clearCart } = cartSlice.actions;
export const { addPurchaseDetails } = purchaseDetailsSlice.actions;
export const {login , logout}=authSlice.actions;

// Export the store
export default store;
