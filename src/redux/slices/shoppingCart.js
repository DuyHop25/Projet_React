import { createSlice } from '@reduxjs/toolkit';
import { course } from '../../constants/dataHome';
const initialState = [];

const shoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers:{
        addItem(state , action) {
            console.log(state,action);
            return [...state,action.payload];
        },
        editItem() {},
        removeItem(){}  
    }
})

 export const  { addItem , editItem , removeItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
