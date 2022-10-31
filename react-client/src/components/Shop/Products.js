import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";



const Products = (props) => {
  const productItems = useSelector((state) => state.product);
  const data = productItems.data;

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {data.map((product) => (<ProductItem
          key={product.id}
          name={product.name}
          id = {product.id}
          price={product.price}
          description={product.description}
        />))}
        
      </ul>
    </section>
  );
};

export default Products;
