// import { storage, ref } from '../config/constants'

// export const getImage = (hero, part) => {
//   console.log(hero, part)
//   const image = () => ref.once('value').then((snapshot) => {
//     return (snapshot.val() && snapshot.val().superheroes[`${part}`][`${hero}`])
//   })

//   storage.child(image).getDownloadURL().then((url) => {
//     console.log('then')
//     // url.json()
//   })
// }