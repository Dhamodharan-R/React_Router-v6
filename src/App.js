import React from "react";
import  ReactDOM  from "react-dom";
import {BrowserRouter, Route , Routes,NavLink,Navigate,useParams,useLocation,useNavigate} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Pagenotfound from "./404";
import Posts from "./posts";
import Postslist from "./Postslist";

function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <NavLink to="/"
    style={({isActive})=>{
        return{
          backgroundColor: isActive ? "red" : "green" ,
          color: isActive ? "white" : "black"
        }
    }}
    >Home</NavLink>

    <NavLink to="/about" 
    style={({isActive})=>{
      return{
        backgroundColor: isActive ? "red" : "green" ,
        color: isActive ? "white" : "black"
      }
  }}
    >About</NavLink>

    <NavLink to="/posts"
    style={({isActive})=>{
      return{
        backgroundColor: isActive ? "red" : "green" ,
        color: isActive ? "white" : "black"
      }
  }}
    >Posts</NavLink>
 

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/posts/:cid" element={<Postslist/>}/>
      <Route  path="/home" element={<Navigate to="/"/>}/>
      <Route path="*" element={<Pagenotfound/>}/>

      </Routes>
      

    </BrowserRouter>
    
    </>
  
  )
}

export default App;
