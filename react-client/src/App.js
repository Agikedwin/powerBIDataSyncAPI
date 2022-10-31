import { Fragment, useEffect,useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import BasicForm from "./components/Cart/BasicForm";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import {sendCartData, fetchCartData } from './store/cart-actions';
import {sendProductData, fetchProductData } from './store/product-actions';

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);


useEffect(() => {
  if(isInitial){
    isInitial = false;
    return
  }
  if(cart.changed){
    dispatch(sendCartData(cart));
  }

},[cart, dispatch]);

useEffect(() => {
  dispatch(fetchCartData())
}, [dispatch]);

useEffect(() => {
  if(isInitial){
    isInitial = false;
    return
  }
  if(product.changed){
    dispatch(sendProductData(product));
  }

},[product, dispatch]);

useEffect(() => {
    dispatch(fetchProductData())
}, [dispatch]);


  return (
    <Fragment> 
    {notification && <Notification 
      status ={notification.status}
      title ={notification.title}
      message ={notification.message}
    /> }
    {/* <Layout>
      {showCart && <Cart />}
      <BasicForm />
      <Products />
    </Layout> */}

    </Fragment>
  );
}

export default App;
