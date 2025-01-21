import { configureStore } from "@reduxjs/toolkit";
import counterRd from './Createslice'
const store = configureStore({
    reducer:{
        counter:counterRd
    }
})
export default store
// there are two hooks are used to select and dispatch
// 1. useselector
// 2. usedispatch :-- actions ko use krne me usedispatch ka use krte hai