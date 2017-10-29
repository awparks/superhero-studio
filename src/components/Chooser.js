import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Image = ({url, hero}) => (
  <img src={ url } className="head" alt="image" data-hero={hero} />
)

export default class Chooser extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="chooser-wrapper flex-item">
        {this.props.images.map((url) => {
          return (          
            <a href="#" onClick={this.props.setPart} key={url[0]}>
              <Image url={url[1]} hero={url[0]} />
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