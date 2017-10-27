export const SET_HEAD = 'SET_HEAD'
export const SET_BODY = 'SET_BODY'
export const SET_LEGS = 'SET_LEGS'
export const SET_PARTS_LIST = 'SET_PARTS_LIST'

export function setHead(hero) {
  return {
    type: SET_HEAD,
    hero
  }
}

export function setBody(hero) {
  return {
    type: SET_BODY,
    hero
  }
}

export function setLegs(hero) {
  return {
    type: SET_LEGS,
    hero
  }
}