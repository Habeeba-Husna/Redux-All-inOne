import { createSlice } from "@reduxjs/toolkit";

const blogSlice=createSlice({
    name:"blog",
    initialState:{
        blog:[]
    },
    reducers:{
        addBlog:(state,action)=>{
            state.blog.push(action.payload)
        }
    }
})

export const {addBlog}=blogSlice.actions
export default blogSlice.reducer