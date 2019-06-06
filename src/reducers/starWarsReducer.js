import {FETCH, SUCCESS, FAIL} from "../actions"

const initialState = {
  characters: [],
  fetching: false,
  error: null,
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        fetching: true,
        error: null,
      }
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload]
      }
    case FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    default:
      return state;
  }
}