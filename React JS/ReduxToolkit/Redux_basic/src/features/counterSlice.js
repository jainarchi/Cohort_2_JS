import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",

    initialState:{
        value: 0
    },

    reducers:{
        increment: (state) =>{
            state.value += 1 ;      // it  uses immer.js, convert it into immutable syntax
        },

        decrement :(state) =>{
            state.value -= 1 ;
        }
    }
})


export const {increment , decrement} = counterSlice.actions
export default counterSlice.reducer