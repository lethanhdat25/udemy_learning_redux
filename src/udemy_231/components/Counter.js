import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";


const Counter = () => {
    const counter=useSelector(state=>state.counter);
    const showCounter=useSelector(state=>state.showCounter);
    const dispatch=useDispatch();
    const incrementHandle=()=>{
        dispatch({
            type:"INCREMENT"
        })
    };
    const decrementHandle=()=>{
        dispatch({
            type:"DECREMENT"
        })
    }
    const toggleCounterHandler = () => {
        dispatch({
            type:"TOGGLE"
        })
    };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {showCounter && <div className={classes.value}>{counter}</div>}
        <button onClick={incrementHandle}>Increment</button>
        <button onClick={decrementHandle}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>

    </main>
  );
};

export default Counter;
