import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './AppHeader.scss'
import logo from '../assets/logo.svg'
export default class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="wrap">
          <h1 className="title">
            <img src={logo} />
          </h1>
          <nav className="nav">
            <NavLink exact to="/">
              首页
            </NavLink>
            <NavLink to="/question">问题</NavLink>
            <NavLink to="/blogs">专栏</NavLink>
            <NavLink to="/lives">讲堂</NavLink>
          </nav>
        </div>
      </header>
    )
  }
}
