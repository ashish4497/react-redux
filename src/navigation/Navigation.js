import React from 'react'
import Header from '../components/Header';
import Home from '../components/Home';

import {
  Routes,
  Route,
} from "react-router-dom";
import Profile from '../components/Profile';
import Setting from '../components/Setting';

export default function Navigation() {
  return (
    <>
			<Routes>
				{/* <Route exact path='/' element= {<Header/>}/> */}
				<Route path='/' element = {<Home/>}/>
				<Route path='/profile' element = {<Profile/>}/>
        <Route path='setting' element = {<Setting/>}/>
			</Routes>
		</>
  )
}
