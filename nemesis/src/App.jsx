import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'
import Main from "./components/main/Main";

export default function App() {
   return (
      <div className='main-section'>
         <Sidebar/>
         <Main/>
      </div>
   );
}
