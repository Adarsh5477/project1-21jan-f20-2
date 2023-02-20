
import Info from "../src/component/Info.jsx";
import Login from "../src/component/Login.jsx";
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "../src/component/Dashboard.jsx";

export default function App() {
  return (
    <main>
     <Router>
      <div>
        <Routes>
          <Route path="/login" element={ <Login />}/>
           <Route path="/dashboard" element={ <Dashboard />}/>
          <Route path="/" element={ <Info />}/>
        </Routes>
      </div>
    </Router>
    </main>
  )
}

