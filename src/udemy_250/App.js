import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Cart from "./components/Cart/Cart";
import {useSelector} from "react-redux";

function App() {
    const store=useSelector(state => state.ui)
    return( <Layout >
            {store.cartIsVisible&&<Cart/>}
            <Products />
         </Layout>)

}

export default App;
