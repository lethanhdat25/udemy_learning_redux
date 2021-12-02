import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0
}
const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            state.totalAmount++;
            if (!existingItem){
                state.items.push({...action.payload,quantity:1});
            }else{
                existingItem.quantity++
            }
        },
        removeItem: (state, action) => {
            const itemId=action.payload;
            const existingItem = state.items.find(item => item.id ===itemId);
            state.totalAmount--;
            if (existingItem.quantity===1){
                state.items=state.items.filter(item=>item.id!==itemId)
            }else {
                existingItem.quantity--
            }
        }
    }
});
export default cart.reducer;
export const {addItem, removeItem} = cart.actions