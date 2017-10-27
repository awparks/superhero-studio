import { SET_HEAD, SET_BODY, SET_LEGS, setHead } from '../actions'
import { getImage } from '../utils/imageServices'

const initialState = {
  visiblePartsList: 'heads',
  selectedHead: 'batman',
  selectedBody: 'thor',
  selectedLegs: 'hulk'
}

export const fetchImageUrl = (hero, part) => {
  return (dispatch) => {
    getImage(hero, part)
      // .then(image => dispatch(setHead(image)))
      .then(console.log('then'))
  }
}

export default function superheroBuilder(state = initialState, action) {
  switch(action.type) {
    case SET_HEAD:
      return { ...state, ...{ selectedHead: action.hero } }
    case SET_BODY:
      return { ...state, ...{ selectedBody: action.hero } }
    case SET_LEGS:
      return { ...state, ...{ selectedLegs: action.hero } }
    default:
      return state
  }

  return state
}