import { userActionTypes } from "./user.type"

//Initial State that is only used for the first state
const INITIAL_STATE = {
  currentUser: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
