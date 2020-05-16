import React, { Component } from 'react'
import './Home.scss'
import AppBanner from '../../common/AppBanner'
import NavUI from './components/NavUI.jsx'
import 'whatwg-fetch'
import API from '../../api/index'
console.log('fetch:', fetch)
export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  render() {
    let wrapLeft = (
      <div className="wrap-left">
        <nav className="top-nav">
          <li className="fa fa-newspaper-o active">为你推荐</li>
          <li className="fa fa-thumbs-o-up">近期热门</li>
          <li className="fa fa-globe">最新内容</li>
        </nav>
        <NavUI data={this.state.list} />
      </div>
    )
    let wrapCenter = <div className="wrap-center"></div>
    return (
      <div className="page" id="home">
        {/* <div className="banner"> */}
        <AppBanner></AppBanner>
        {/* </div> */}
        <div className="wrap">
          {wrapLeft}
          {wrapCenter}
          {/* <div className="wrap-right">2</div> */}
        </div>
      </div>
    )
  }
  componentDidMount() {
    fetch(API.CHANNELS_API)
      //接收到响应
      .then(response => {
        return response.json()
      })
      //以json格式解析数据
      .then(result => {
        console.log(result)
        this.setState({
          list: result.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
