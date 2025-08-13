import React from 'react'
import './NoPage.css';
import Navbar from '../../components/navbar/Navbar';
import MiniFooter from '../../components/mini-footer/MiniFooter';

function NoPage() {
  return (
    <>
      <Navbar />
      <div className="no-page-container">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
      <MiniFooter />
    </>
  )
}

export default NoPage
