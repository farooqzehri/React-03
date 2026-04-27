// import { configureStore } from "@reduxjs/toolkit";



// export const store = configureStore({
    //     reducer: {
        //         todo : todoReducer
        //     }
        // })
        
        import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../reducers/todoslice';

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})