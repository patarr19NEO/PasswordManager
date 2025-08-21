import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"

function App() {
  return (
      <div className="hello">
        <header>
            <div className="logo">
                <img src="./assets/icon-key/icon-key.png" alt="logo-key"/>
                <h1>Password Manager</h1>
            </div>
        </header>
      </div>
  )
}

export default App
