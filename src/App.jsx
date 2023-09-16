import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./assets/css/index.css";
import router from "./router";
import useShopping from "./hooks/useShopping";
import { useForm } from "react-hook-form";
import HomePage from "./pages/Home";

function App() {
//   const {shoppingCart} = useShopping();
//   // console.log("shoppingCart:",shoppingCart);
//   // const [state, setState ] = useState([]);
//   const {register , handleSubmit} = useForm();

//  const {handleAddItem} = useShopping();

//   const onSubmit = (v) => handleAddItem(v);

  // useEffect(() =>
  //     setState(onSubmit()),
  //     [state]
  // )
  return  ( 
  <>
    {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("ticket")} style={{width: "200px"}}/>
          <button type="submit">Pay ticketaa</button>
    </form> */}
    {/* <HomePage /> */}

    <RouterProvider router={router} />;
   
  </>)
}

export default App;
