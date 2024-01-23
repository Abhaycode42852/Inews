import './App.css';
import News from './component/News';
import Navbar from './component/navbar';
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  let apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0);
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = "white";

    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "#303030";

    }
  }
  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          setprogress={progress}
          onLoaderFinished={() =>{setprogress(0)}}
        />
        <Navbar toggleMode={toggleMode} mode={mode} />
        <Routes>
          <Route exact path='/' element={<News setprogress={setprogress} apiKey={apiKey} key="/" mode={mode} pageSize={5} country="in"  />} />
          <Route exact path='/business' element={<News setprogress={setprogress} apiKey={apiKey} key="business" mode={mode} pageSize={5} country="in" category="business" />} />
          <Route exact path='/entertainment' element={<News setprogress={setprogress} apiKey={apiKey} key="entertainment" mode={mode} pageSize={5} country="in" category="entertainment" />} />
          <Route exact path='/general' element={<News setprogress={setprogress} apiKey={apiKey} key="general" mode={mode} pageSize={5} country="in" category="general" />} />
          <Route exact path='/health' element={<News setprogress={setprogress} apiKey={apiKey} key="health" mode={mode} pageSize={5} country="in" category="health" />} />
          <Route exact path='/science' element={<News setprogress={setprogress} apiKey={apiKey} key="science" mode={mode} pageSize={5} country="in" category="science" />} />
          <Route exact path='/sports' element={<News setprogress={setprogress} apiKey={apiKey} key="sports" mode={mode} pageSize={5} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News setprogress={setprogress} apiKey={apiKey} key="technology" mode={mode} pageSize={5} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

