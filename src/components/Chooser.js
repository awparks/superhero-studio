import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Image = ({url}) => (
  <img src={ url } className="head" alt="image" />
)

const setPart = () => {

}

export default class Chooser extends Component {
  constructor(props) {
    super(props)
    this.setPart = this.setPart.bind(this)
  }
  setPart() {
    console.log(this.props)
  }

  render() {
    return (
      <div className="chooser-wrapper flex-item">
        {this.props.images.map((url, index) => {
          return (          
            <a href="#" onClick={this.setPart} key={index}>
              <Image url={url} />
            </a>
          )
        })}
      </div>
    )
  }
}

// const Chooser = ({ images }) => (
//   <div className="chooser-wrapper flex-item">
//     {images.map((url, index) => {
//       return (          
//         <a href="#" onClick={setPart} key={index}>
//           <Image url={url} />
//         </a>
//       )
//     })}
//   </div>
// )

// Chooser.propTypes = {
//   images: PropTypes.array.isRequired
// }

// export default Chooser