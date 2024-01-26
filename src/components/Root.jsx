import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-3">
                <Outlet />
            </div>
        </>
    )
}

export default Root