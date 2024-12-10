//todo


// import {configureStore} from "@reduxjs/toolkit"
// import todoReducer from "../features/todo/todoSlice"

// export const store=configureStore({
//     reducer:{
//         todo:todoReducer,
//     },
// })


//Blog



import {configureStore} from '@reduxjs/toolkit'
import blogReducer from '../features/Blog/blogSlice'


export const store=configureStore({
    reducer:{
        blog: blogReducer
    }
})




//quiz app


// import { configureStore } from "@reduxjs/toolkit";
// import quizReducer from "../slices/quizSlice";

// export const store = configureStore({
//   reducer: {
//     quiz: quizReducer,
//   },
// });