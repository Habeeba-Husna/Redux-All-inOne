//todo

// import './App.css'
// import Todos from './components/Todos'
// import AddTodo from './components/AddTodo'

// function App() {

//   return (
//     <div>
//        <AddTodo/>
//       <Todos/>
     
    
//     </div>
//   )
// }

// export default App


//blog

// import React from 'react'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Home from './components/Home'
// import CreateBlog from './components/CreateBlog'
// import BlogDetails from './components/BlogDetails'

// function App() {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='createBlog' element={<CreateBlog />} />
//           <Route path='blog/:index' element={<BlogDetails />} />
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App



//quiz app


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Homess from "./components/Homess";
// import QuizPage from "./components/QuizPage";
// import ResultPage from "./components/ResultPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homess />} />
//         <Route path="quiz" element={<QuizPage />} />
//         <Route path="results" element={<ResultPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



//notepad

// import React from 'react'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import NoteHome from './NotePad/NoteHome'
// import NoteList from './NotePad/NoteList'


// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//      <Routes>
//       <Route path='/' Component={NoteHome}/>
//       <Route path='notelist' Component={NoteList}/>
//      </Routes>
//       </BrowserRouter>

//     </div>
//   )
// }

// export default App


//todo color



import { useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addtask, deletetask, taskdone } from "./redux/taskSlice";

function App() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.task.tasks);

//   const handleEdit=(id)=>{
//     const newText=prompt("Edit your todo","")
//     if(newText){
//         dispatch(editTodo({id,newText}))
//     }
// }
  return (
    <>
      <div>
        <h1>Todo</h1>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button
          onClick={() => {
            dispatch(addtask({ id: Date.now(), task: task, done: false }));
            setTask("");
          }}
        >
          Add task
        </button>
      </div>
      <div>
        {datas.map((item) => (
          <p style={{ backgroundColor: `${item.done && "red"}` }} key={item.id}>
            {item.task}
            <button onClick={() => dispatch(taskdone(item.id))}>Done</button>
            <button onClick={() => dispatch(deletetask(item.id))}>
              Delete
            </button>
            <button onClick={()=>handleEdit(item.id)}>Edit</button>
          </p>
        ))}
      </div>
    </>
  );
}

export default App;