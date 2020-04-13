import React from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { Header } from "./layout/Header/Header";
import { Login } from "./layout/profilesRoutes/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{display:"flex", justifyContent:"center"}}>
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
