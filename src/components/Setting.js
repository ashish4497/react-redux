import React from 'react';
import Header from './Header';
import '../assets/style/setting.css';
import { Link } from 'react-router-dom';

export default function Setting() {
  return (
    <>
      <Header/>
      <div className="s-p-c">
        <p>settting</p>
      </div>
      <div className="s-p-c">
      <Link to ="/profile"> Back to Profile</Link>
      </div>
    </>   
  )
}
