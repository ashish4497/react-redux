import { ADD_USER_INFO, REMOVE_USER, EDIT_USER,UPDATE_USER } from "../action/action-types";

const innitialState = {
  userList: [],
  updateUser: {},
  isEdit: false
}

const userReducer = (state = innitialState, action) => {
  switch (action.type) {
    case ADD_USER_INFO:
      return {
        ...state,
        state: state.userList.push(action.payload)
      }
    case REMOVE_USER:
      return {
        ...state.userList,
        userList: [...state.userList.filter(item => item.id !== action.payload)]
      }
    case EDIT_USER:
      return {
        ...state,
        updateUser: action.payload,
        isEdit: true
      }
    case UPDATE_USER : 
      return {
        ...state,
        userList: [...state.userList, action.payload],
        isEdit:false
      }
    default:
      return state;
  }
}

export default userReducer;