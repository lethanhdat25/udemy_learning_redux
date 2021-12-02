
import './App.css';
import Counter from "./udemy_231/components/Counter";
import Header from "./udemy_231/components/Header";
import UserProfile from "./udemy_231/components/UserProfile";
import Register from "./udemy_231/components/Register";
import Auth from "./udemy_231/components/Auth";
import {useDispatch, useSelector} from "react-redux";
import {login} from "./udemy_231/store/slices/auth";

function App() {
    const store=useSelector(state => state.auth)
    const dispatch=useDispatch();
  return (
      <>
        <Header/>
          {!store.isAuthenticated?<Register onLogin={()=>dispatch(login())}/>:<Auth/>}
        <UserProfile/>
        <Counter />
      </>
  );
}

export default App;
