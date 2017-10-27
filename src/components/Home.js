import React, { Component } from 'react'
import Chooser from './Chooser'
import SelectedBodyParts from '../containers/selectedBodyParts'
import { storage, ref } from '../config/constants'
import firebase from 'firebase'
const placeholderImage = require('../assets/letsdothis.jpg')

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heads:[],
      bodies: [],
      legs: [],
      selectedPart: 'bodies'
    }

    this.changePart = this.changePart.bind(this)
  }

  componentDidMount() {
    this.getImageUrls()
  }

  getImageUrls () {
    const images = () => ref.once('value').then((snapshot) => {
      return (snapshot.val() && snapshot.val().superheroes[`${this.state.selectedPart}`])
    })

    images().then((result) => {
      const imageUrlsArray = Object.values(result)
      let promises = []
      imageUrlsArray.map((image) =>  {
        promises.push(new Promise((resolve, reject) => {
          resolve(storage.child(image).getDownloadURL().then((img) => {
            return img
          }))
        }))
      })

      Promise.all(promises).then((result) => {
        this.setState(result.map((img) => {
          this.state[`${this.state.selectedPart}`].push(img)
        }))
      })
    })
  }

  changePart (e) {
    const newPart = {
      selectedPart: e.target.innerHTML.toLowerCase()
    }
    this.setState(...this.state, newPart)
    this.getImageUrls()
  }

  render () {
    return (
      <div className="home-wrapper flex-wrapper">
        <div className="superhero-wrapper flex-item">
          <button className="heads-btn" onClick={this.changePart}>
            Heads
          </button>
          <button className="bodies-btn" onClick={this.changePart}>
            Bodies
          </button>
          <SelectedBodyParts />
        </div>
        <Chooser images={this.state[`${this.state.selectedPart}`]} />
      </div>
    )
  }
}