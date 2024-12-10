// import Counter from "./Counter";
// import Aside from "./Aside";
// function Main({count,setCount,color,setColor}) {
//   return (
//     <div className="main">
//       <Counter count={count} setCount={setCount}/>
//       <Aside color={color} setColor={setColor}/>
//     </div>
//   );
// }

// export default Main;


import Counter from "./Counter";
import Aside from "./Aside";
function Main() {
  return (
    <div className="main">
      <Counter />
      <Aside />
    </div>
  );
}

export default Main;