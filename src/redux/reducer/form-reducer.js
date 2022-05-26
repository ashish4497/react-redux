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
        userList : [...state.userList, action.payload]
      }
    case REMOVE_USER:
      return {
        ...state.userList,
        userList: state.userList.filter(item => item.id !== action.payload)
      }
    case EDIT_USER:
      return {
        ...state,
        updateUser: action.payload,
        isEdit: true
      }
    case UPDATE_USER : 
    const id = action.payload.id;
      return {
        ...state,
        userList : state.userList.map(user=> {
          return (user.id === id ? action.payload : user )
        }),
        isEdit:false
      }
    default:
      return state;
  }
}

export default userReducer;