import React from 'react'
import { NavLink } from 'react-router-dom'

const ListLink = ({path, label}) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={path}  disabled={true} >{label}</NavLink>
        </li>
    )
}

export default ListLink