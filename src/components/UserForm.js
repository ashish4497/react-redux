import React, { useState , useEffect } from 'react'
import ListView from './ListView'
import '../assets/style/userfome.css'
import { useSelector, useDispatch } from 'react-redux'
import { addUserInfo, updateUser } from '../redux/action/form-action'


export default function UserForm() {
  const userUpdate = useSelector((state) => state.userReducer.updateUser);
  const isEditable = useSelector((state) => state.userReducer.isEdit)

  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    id: ''
  })

  useEffect(()=> {
    if(isEditable === true) {
      setUserInfo({...userUpdate})
    }
  },[isEditable,userUpdate])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUserInfo(userInfo))
    setUserInfo({
      firstName:'',
      lastName:'',
      age :'',
      id: Math.floor(Math.random() * 100)
    })   
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateUser(userInfo))
    setUserInfo({
      firstName:'',
      lastName:'',
      age :'',
      id: Math.floor(Math.random() * 100)
    }) 
  }

  const {firstName,lastName,age} = userInfo;

  return (
    <> 
    <div className='parent-container'>
      <ListView />
      <form autoComplete='off'>
        <h4>UserForm</h4>
        <input type='text' value = {firstName} placeholder='enter First Name' className='input-btn' name="firstName" onChange={handleChange} />
        <input type="text" value={lastName} placeholder='Enter Last Name' className='input-btn' name="lastName" onChange={handleChange} />
        <input type='number' value={age} placeholder='Enter age' className='input-btn' name='age' onChange={handleChange} />
        {
          isEditable !== true ? 
          <button className='submit-btn' onClick={handleSubmit}>submit</button> :
          <button className='submit-btn' onClick={handleUpdate}>update</button>
        }        
      </form>
    </div>
    </>
  )
}
