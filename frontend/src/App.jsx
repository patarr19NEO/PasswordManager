import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import GetIntoAccount from "./Components/GetIntoAccount/GetIntoAccount.jsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={
                  <div className="App">
                      <Header />
                      <Main />
                  </div>
              } />

              <Route path="/getIntoAccount" element={<GetIntoAccount />} />
          </Routes>
      </Router>
  )
}

export default App
