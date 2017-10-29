import React, { Component } from 'react'

export default class Superhero extends Component {
  constructor(props) {
    super(props)
    console.log(props.head)
  }

  render() {
    return (
      <div className="outer-wrapper">
        <div className="head-container">
          <img src={this.props.head} />
        </div>
        <div className="body-container">
          <img src={this.props.body} />
        </div>
         <div className="legs-container">
          <img src={this.props.legs} />          
        </div> 
      </div>
    )
  }
}