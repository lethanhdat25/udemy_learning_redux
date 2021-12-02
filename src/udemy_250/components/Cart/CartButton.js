import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {toogle} from "../../store/slices/ui";

const CartButton = (props) => {
    const store=useSelector(state => state.cart);
    const dispatch=useDispatch();
  return (
    <button className={classes.button} onClick={()=>dispatch(toogle())}>
      <span>My Cart</span>
      <span className={classes.badge}>{store.totalAmount}</span>
    </button>
  );
};

export default CartButton;
