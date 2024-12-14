import {createSlice} from "@reduxjs/toolkit"


const todoSlice=createSlice({
    name:"todo",
    initialState:{
        value1:[],value2:[]
    },
    reducers:{
        add1:(state,action)=>{
            state.value1.push({id:state.value1.length+1,text:action.payload})
        },
        add2:(state,action)=>{
            state.value2.push({id:state.value2.length+1,text:action.payload})
        },
        remove:(state,action)=>{
            state.value1=state.value1.filter((item)=>item.id!==action.payload)
            state.value2=state.value2.filter((item)=>item.id!==action.payload)
        },
        addColor:(state,action)=>{
            state.value1=state.value1.map((item) => item.id === action.payload ? {...item,color:"yellow"} : item)
        }
    }
})
export const {add1,add2, remove,addColor}=todoSlice.actions;
export default todoSlice.reducer