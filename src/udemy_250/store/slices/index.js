import {combineReducers} from "redux";
import cart from "./cart";
import ui from "./ui";


const rootReducer=combineReducers({
    cart:cart,
    ui:ui
})
export default rootReducer;