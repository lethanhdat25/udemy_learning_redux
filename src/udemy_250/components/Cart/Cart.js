import css from './Cart.module.css';
import CartItem from './CartItem';
import Modal from "../UI/Modal";
import {useSelector} from "react-redux";

const Cart = () => {
    const store = useSelector(state => state.cart);
    const totalPrice=store.items.reduce((prev,cur)=>{
        prev+=cur.quantity*cur.price
        return prev
    },0);
    const cartItems = store.items.map((item, index) => <CartItem item={item} key={index}/>)
    return (
        <Modal>
            <h2>Your Shopping Cart</h2>
            <ul className={css['cart-items']}>
                {cartItems}
            </ul>
            {store.items.length===0&&<h3>You don't have products in your shopping cart</h3>}
            <b>{totalPrice}</b>
        </Modal>
    );
};

export default Cart;
