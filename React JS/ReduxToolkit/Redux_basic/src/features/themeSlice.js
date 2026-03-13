import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name : 'theme',

    initialState:{
        value : 'light'
    },

    reducers :{
      lightMode : (state) =>{
        state.value = 'light'
      },

      darkMode : (state) =>{
        state.value = 'dark'
      },


      newMode :(state , action) =>{
        state.value = action.payload
      }
    }
})


export const {lightMode , darkMode , newMode} = themeSlice.actions
export default themeSlice.reducer