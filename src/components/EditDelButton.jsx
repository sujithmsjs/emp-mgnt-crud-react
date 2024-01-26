import React from 'react'

const EditDelButton = ({ onEdit, onDelete, id = 0 }) => {
    return (
        <>
            <button type="submit" className="btn btn-primary" onClick={() => onEdit(id)}>Edit</button>
            <button type="submit" className="btn btn-warning mx-3" onClick={() => onDelete(id)}>Delete</button>
        </>
    )
}

export default EditDelButton