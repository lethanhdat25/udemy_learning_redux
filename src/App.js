
import './App.css';
import Counter from "./udemy_231/components/Counter";
import Header from "./udemy_231/components/Header";
import UserProfile from "./udemy_231/components/UserProfile";
import {useEffect} from "react";
import axios from "axios";
import Register from "./udemy_231/components/Register";

function App() {

  return (
      <>
        <Header/>
        <Register/>
        <UserProfile/>
        <Counter />
      </>
  );
}

export default App;
