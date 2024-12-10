import { ProductList,Header } from './Components'
import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./redux/cart";
import axios from "axios";
function App() {
   return (
      <Fragment>
         <Header />
         <ProductList />
      </Fragment>
   );
}

export default App;