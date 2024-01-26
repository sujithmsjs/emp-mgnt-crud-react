import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddNew = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            pswd: formData.get('pswd'),
        }
        console.info({ data });
        navigate('/');
    }

    return (
        <>
            <h2>Create New Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
                <button type="button" className="btn btn-secondary mx-3" onClick={() => navigate('..')}>Back</button>
            </form>
        </>
    )
}

export default AddNew