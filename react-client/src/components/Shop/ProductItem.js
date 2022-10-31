import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { cardActions } from '../../store/card-slice';
import BasicForm from '../Cart/BasicForm';

const ProductItem = (props) => {
  const { name, price, description , id} = props;
  const dispatch = useDispatch();
  const addToProductsHandler = () => {  
    dispatch(cardActions.addItemsTocart({
      id,
      name,
      price,
      description
    }));
  }

  return (
    <li className={classes.item}>
      <Card>

        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToProductsHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
