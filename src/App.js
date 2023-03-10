import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "./scenes/Home/Home";
import {Login} from "./scenes/Login/Login";
import {Register} from "./scenes/Register/Register"
import Dashboard from "./scenes/Dashboard/DashboardPage";
import DashboardPage from "./scenes/Dashboard/DashboardPage";
import FormPage from "./scenes/Form/FormPage";
import React from "react"
import Auth from  "./components/Auth"

function App() {
  return <Auth>
    <BrowserRouter>
        <Routes>
        <Route path="/form" element={<FormPage/>} />
    </Routes>
  </BrowserRouter>
    </Auth>;

}

export default App;
