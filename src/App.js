import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import AppHeader from './common/AppHeader.tsx'
import AppFooter from './common/AppFooter.jsx'
import Home from './pages/home/Home.jsx'
import Question from './pages/question/Question.jsx'
import Blogs from './pages/blogs/Blogs.jsx'
import Lives from './pages/lives/Lives.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader></AppHeader>
        <Route exact path="/" component={Home}></Route>
        <Route path="/question" component={Question}></Route>
        <Route path="/blogs" component={Blogs}></Route>
        <Route path="/lives" component={Lives}></Route>
        <AppFooter></AppFooter>
      </div>
    </Router>
  )
}

export default App
