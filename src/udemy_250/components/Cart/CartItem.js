import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {addItem, removeItem} from "../../store/slices/cart";

const CartItem = (props) => {
  const dispatch=useDispatch();
  const { title, quantity=4, price } = props.item;
  const total=price*quantity;
  return (
    <li className={classes['cart-item']}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>dispatch(removeItem(props.item.id))}>-</button>
          <button onClick={()=>dispatch(addItem(props.item))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
