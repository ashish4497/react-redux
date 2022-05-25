import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../assets/style/listview.css'
import { editUser, removeUser } from '../redux/action/form-action';

export default function ListView() {
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.userReducer.userList);
 
  const handleDelete = (id) => {
    dispatch(removeUser(id))
  }

  const handleEdit = (user) => {
    dispatch(editUser(user))
  }

  return (
   <>
    <div>
    <h3>ListView</h3>
    {
      userList?.map((user,index) => {
        return (
          <div key = {index} className="list-item-container">
            <span>firstName : {user.firstName}</span>
            <span className='icon-c'>            
              <i className="fas fa-trash-alt" onClick={() => handleDelete(user.id)}/> 
              <i className="fas fa-edit" onClick={() => handleEdit(user)}/>
            </span>  
            <p> lastName : {user.lastName}</p>
            <p> Age : {user.age}</p>
          </div>
        )
      })
    }
    </div>
   </>
  )
}
