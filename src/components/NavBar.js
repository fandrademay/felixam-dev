import React from 'react'
import { NavBarData } from './NavBarData'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { makeStyles, Toolbar, Typography } from '@material-ui/core'


function NavBar() {
    return (
        <>
            <nav className ={ NavBar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    {/* <img src="./images/avi1.jpg"></img> */}
                    {NavBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    )
}

export default NavBar
