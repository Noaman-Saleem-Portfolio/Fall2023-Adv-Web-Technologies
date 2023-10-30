import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Menubar.css"

const Menubar = () => {
  return (
    <div className='menubar'>
        <ul className='menuList'>
            <li className='listItem'>
                <NavLink to={"/"}>
                    Home
                </NavLink>
            </li>
            <li className='listItem'>
                <NavLink to={"/counter"}>
                    Counter
                </NavLink>
            </li>
            <li>
                <NavLink className='listItem' to={"/room"}>
                    Room
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Menubar