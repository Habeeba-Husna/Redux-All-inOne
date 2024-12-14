import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate, useParams } from 'react-router-dom'
import { addColor } from '../redux/todoSlice';

function View() {
    const {id}=useParams();
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const title=useSelector((state)=>state.todo.value1.find((item) => item.id === parseInt(id)) )
    const discription=useSelector((state)=>state.todo.value2.find((item) => item.id === parseInt(id) ))

    const handleDone=(id)=>{
        dispatch(addColor(id))
    }
  return (
    <div>
        <h2>{title.text}</h2>
        <h4>{discription.text}</h4>
        <button onClick={() => handleDone(parseInt(id))}>Done</button>
        <button onClick={()=>navigate("/")}>Home</button>
        
    
    </div>
  )
}

export default View


// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addColor } from '../redux/todoSlice' 
// import { useNavigate, useParams } from 'react-router-dom'

// function View() {
//     const title = useSelector((state) => state.todo.value1)
//     const discription = useSelector((state) => state.todo.value2)

//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const {id} = useParams()

//     const handleDone = (id) => {
//         dispatch(addColor(id))
//     }

    

//     const titleView= title.find((item) => item.id === parseInt(id) )
//     console.log(titleView);


//     const discriptionView= discription.find((item) => item.id === parseInt(id))
//     console.log(discriptionView)

//   return (
//     <div>
//         <h2>{titleView.text}</h2>
//         <p>{discriptionView.text}</p>
//         <button onClick={() => handleDone(parseInt(id))}>Done</button>
//        <button onClick={() => navigate("/")}>Home</button>
//     </div>
//   )
// }

// export default View