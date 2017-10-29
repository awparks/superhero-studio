import React, { Component } from 'react'
import Chooser from './Chooser'
import Superhero from './Superhero'
// import SelectedBodyParts from '../containers/selectedBodyParts'
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
      selectedHead: 'batman',
      selectedBody: 'hulk',
      selectedLegs: 'thor',
      visiblePartList: 'legs'
    }

    this.changePartList = this.changePartList.bind(this)
  }

  componentDidMount() {
    const partsToLoad = ['heads', 'bodies', 'legs']
    partsToLoad.map((part) => {
      this.getImageUrls(part)
    })
  }

  getImageUrls (part) {
    const images = () => ref.once('value').then((snapshot) => {
      return (snapshot.val() && snapshot.val().superheroes[`${part}`])
    })

    images().then((result) => {
      const imageUrlsArray = Object.entries(result)
      let promises = []
      imageUrlsArray.map((image) =>  {
        promises.push(new Promise((resolve, reject) => {
          resolve(storage.child(image[1]).getDownloadURL().then((img) => {
            return [image[0], img]
          }))
        }))
      })

      Promise.all(promises).then((result) => {
        this.setState(result.map((img) => {
          this.state[`${part}`].push(img)
        }))
      })
    })
  }

  getActiveHero (part, hero) {
    if (this.state[`${part}`].length > 0) {
      const heroUrl = this.state[`${part}`].find((arr) => {
        return arr[0] === hero
      })
      return heroUrl[1]
    }

    return ''
  }

  changePartList (e) {
    this.setState({ visiblePartList: e.target.innerHTML.toLowerCase() })
  }

  setPart (e) {
    const hero = e.target.getAttribute('data-hero')
    const partToSet = this.state.visiblePartList
    if (partToSet === 'heads') {
      this.setState({ selectedHead: hero })
    } else if (partToSet === 'bodies') {
      this.setState({ selectedBody: hero })      
    } else {
      this.setState({ selectedLegs: hero })      
    }
  }

  render () {
    return (
      <div className="home-wrapper flex-wrapper">
        <div className="superhero-wrapper flex-item">
          <button className="heads-btn" onClick={this.changePartList}>
            Heads
          </button>
          <button className="bodies-btn" onClick={this.changePartList}>
            Bodies
          </button>
          <button className="legs-btn" onClick={this.changePartList}>
            Legs
          </button>
          <Superhero
            head={this.getActiveHero('heads', this.state.selectedHead)}
            body={this.getActiveHero('bodies', this.state.selectedBody)}
            legs={this.getActiveHero('legs', this.state.selectedLegs)} />
        </div>
        <Chooser images={this.state[`${this.state.visiblePartList}`]} setPart={this.setPart.bind(this)} />
      </div>
    )
  }
}