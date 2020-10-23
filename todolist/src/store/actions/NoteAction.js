import * as actionTypes from './ActionTypes'

export const addNote = (note) => ({
  type: actionTypes.ADD_NOTE,
  payload: note
})