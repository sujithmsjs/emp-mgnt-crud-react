import React from 'react'
import ListLink from './ListLink'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark  justify-content-center">
            <div className="container">
                <ul className="navbar-nav">
                    <ListLink label='Home' path='/'/>
                    <ListLink label='New' path='/new'/>
                    <ListLink label='Edit' path='/edit/0'/>
                    {/* <ListLink label='View' path='/view'/>
                    <ListLink label='About' path='/about'/> */}

                </ul>
                <ul className="navbar-nav">
                    <ListLink />
                </ul>
            </div>
        </nav>
    )
}

export default NavBar