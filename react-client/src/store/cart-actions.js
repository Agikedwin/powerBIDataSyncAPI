import { uiActions } from "./ui-slice";
import { cardActions } from "./card-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3005/cart/carts" );

            if(!response.ok){
                throw new Error("Could not  fetch cart data");
            }

            const data =  await response.json();
            return  data;
            
        };
        
        try {

          const cartData = await  fetchData();

          dispatch(cardActions.replaceCart(cartData))



        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success...",
            message: "Sent  cart data successfully",
          })
        );
          
            
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!...",
                  message: "Fetching   cart data failed",
                })
              );
            
        }
    }
}



export const sendCartData =  (cart) => {
    return  async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data...",
        })
      );
  
      const sendRequest = async () => {
        const response =  await fetch("http://localhost:3005/cart/cart", {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        if (!response.ok) {
          throw new Error("Sending cart data failed");
        }
      };
  
      try {
         await sendRequest();
  
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success...",
            message: "Sent  cart data successfully",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!...",
            message: "Sending  cart data failed",
          })
        );
      }
    };
  };