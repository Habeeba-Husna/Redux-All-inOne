import React  from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {removeTodo,editTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos=useSelector(state=>state.todo.todos)
    const dispatch=useDispatch()

    const handleEdit=(id)=>{
        const newText=prompt("Edit your todo","")
        if(newText){
            dispatch(editTodo({id,newText}))
        }
    }
    
    return (
        <>
            <div>Todos</div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div>{todo.text}</div>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                        <button onClick={()=>handleEdit(todo.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos
