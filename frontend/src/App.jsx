import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'

function App() {
  return (
      <div className="App">
        <Header />
        <Main />
      </div>
  )
}

export default App
