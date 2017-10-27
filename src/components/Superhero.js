import React, { Component } from 'react'
import { storage, ref } from '../config/constants'
import firebase from 'firebase'

export default class Superhero extends Component {
  constructor(props) {
    super(props)

    console.log(props, this.props)    
  }

  componentDidMount() {
    this.props.fetchImageUrl(this.props.head, 'heads')
  }

  render() {
    return (
      <div className="outer-wrapper">
        <div className="head-container">
          <img src="" />
        </div>
        <div className="body-container">
          {/* <img src={body} /> */}
        </div>
        <div className="legs-container">
          {/* <img src={legs} /> */}
        </div>
      </div>
    )
  }
}