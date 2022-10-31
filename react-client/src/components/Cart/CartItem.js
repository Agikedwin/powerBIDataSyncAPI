import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cardActions } from '../../store/card-slice';

const CartItem = (props) => {
  const { name, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();


  const onAddClicked = () => {  
    dispatch(cardActions.addItemsTocart({
      id,
      price,
      name,
    }))
  }
  const onRemovedClicked = () =>{
    dispatch(cardActions.removeItemsFromCart(id))

  }


  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          {total}
          <span className={classes.itemprice}>{price}</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemovedClicked}>-</button>
          <button onClick={onAddClicked}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
