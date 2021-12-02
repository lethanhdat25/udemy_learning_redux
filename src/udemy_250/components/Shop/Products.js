import ProductItem from './ProductItem';
import classes from './Products.module.css';

const items=[
    {
        id:1,
        title:'Test1',
        price:1,
        description:'This is a first product - amazing!'
    },
    {
        id:2,
        title:'Test2',
        price:2,
        description:'This is a second product - amazing!'
    },
    {
        id:3,
        title:'Test3',
        price:3,
        description:'This is a third product - amazing!'
    },
]
const productItems=items.map(item=><ProductItem item={item} key={item.id}/>)
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {productItems}
      </ul>
    </section>
  );
};

export default Products;
