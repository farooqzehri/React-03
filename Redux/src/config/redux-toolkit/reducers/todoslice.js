// import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { useState } from "react";

import { createSlice, nanoid } from "@reduxjs/toolkit";


// export const todoslice = createSlice({
//     name: 'Todo',
//     initialState:{
//         todo:[{
//             title: 'Hello todo',
//             id: nanoid()
//         }],
//         reducers:{
//             addtodo:(state , action)=>{
//                 state.todo.push({
//                     title: action.payload.title,
//                     id: nanoid(),
//                 })
//             },
//             delettodo:()=>{
//                 const index = state.todo.findIndex((item) => {
//                     item.id === action.payload.id,
//                 }, 
//                 todo.splice(index , 1 ))
//             },
//             edittodo:(state , action)=>{
//                 const index = state.todo.findIndex((item) => {
//                     item.id === action.payload.id,
//                 })
//                 state.todo[index].title = action.payload.title
//              }

//         }

//     }
// })

// export const {addtodo , delettodo , edittodo} = todoslice.actions

// export default todoslice.reducer;


export const todoslice = createSlice({
    name: 'todo',
    initialState: {
        todo: [{
            title: "Hello World",
            id: nanoid()
        }],
    },
    reducers: {          // ✅ reducers is a sibling of initialState
        addTodo: (state, action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            });
        },
        deletTodo: (state, action) => {
            const index = state.todo.findIndex(
                (item) => item.id === action.payload.id
            );
            state.todo.splice(index, 1);
        },
        editTodo: (state, action) => {
            const index = state.todo.findIndex(
                (item) => item.id === action.payload.id
            );
            state.todo[index].title = action.payload.title;
        },
    },
});

export const { addTodo, editTodo, deletTodo } = todoslice.actions;
export default todoslice.reducer;