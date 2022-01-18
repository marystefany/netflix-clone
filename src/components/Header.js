import React from 'react'
import './Header.css'

function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pP0yhC8reijdz7lIBDEdyuWgn6J8X84dAA&usqp=CAU" alt="user" />
        </a>
      </div>
    </header>
  )
}
export default Header