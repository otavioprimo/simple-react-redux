import { CLICK_UPDATE_VALUE, CLICK_ADD_VALUE, CLICK_DELETE_VALUE } from "../actions/actionTypes";

const initialState = {
  newValue: '',
  labels: [],
  message: ''
}

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      }
    case CLICK_ADD_VALUE:
      return {
        ...state,
        labels: [
          ...state.labels,
          action.label
        ],
        message: action.label ? `${action.label} adicionado com sucesso` : ''
      }
    case CLICK_DELETE_VALUE:
      return {
        ...state,
        labels: state.labels.filter((el, index) => action.index != index)
      }
    default:
      return state;
  }
}