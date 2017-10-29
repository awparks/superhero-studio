// import { connect } from 'react-redux'
// import { storage, ref } from '../config/constants'
// import firebase from 'firebase'
// import { setHead } from '../actions'
// import { fetchImageUrl } from '../reducers'
// import Superhero from '../components/Superhero'

// // const getImage = (hero, part) => {
// //   const image = () => ref.once('value').then((snapshot) => {
// //     return (snapshot.val() && snapshot.val().superheroes[`${part}`][`${hero}`])
// //   })

// //   storage.child(`${image}.png`).getDownloadURL().then((url) => {
// //     store.dispatch(setHead(url))
// //   })
// // }

// const mapStateToProps = state => {
//   return {
//     head: state.selectedHead,
//     body: state.selectedBody,
//     legs: state.selectedLegs
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     // onTodoClick: id => {
//     //   dispatch(toggleTodo(id))
//     // }
//   }
// }

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     onTodoClick: id => {
// //       dispatch(toggleTodo(id))
// //     }
// //   }
// // }

// const SelectedBodyParts = connect(
//   mapStateToProps,
//   { fetchImageUrl }
// )(Superhero)

// export default SelectedBodyParts