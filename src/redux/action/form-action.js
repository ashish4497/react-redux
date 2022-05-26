import { ADD_USER_INFO,REMOVE_USER,EDIT_USER,UPDATE_USER } from "./action-types";

export const addUserInfo = (data) => {
  return {
    type : ADD_USER_INFO,
    payload : data
  }
}

export const removeUser = (id) => {
  return {
    type : REMOVE_USER,
    payload : id
  }
}

export const editUser = (user) => {
  return {
    type : EDIT_USER,
    payload : user
  }
}

export const updateUser = (updatedData) => {
  return {
    type : UPDATE_USER,
    payload : updatedData
  }
}
