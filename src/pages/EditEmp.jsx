import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import FetchEmployee from '../components/FetchEmployee';

const EditEmp = () => {

    const [searhchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.id;
    console.info(id + ' ' + (id !== 0));
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            id: formData.get('id'),
            name: formData.get('name'),
            email: formData.get('email'),
            pswd: formData.get('pswd'),
        }
        console.info({ data });
        navigate('/');
    }

    return (
        <>
            <h4>Fetch Employee Details</h4>
            <FetchEmployee empId={id} />


            {
                id !== 0 &&
                <>
                    <h4>Edit Employee</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-3">
                            <label htmlFor="id">Id:</label>
                            <input type="text" className="form-control" value={id} id="id" name="id" editable="false" readOnly />
                        </div>
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
                        <button type="submit" className="btn btn-primary">Edit</button>
                        <button type="submit" className="btn btn-danger mx-3">Delete</button>
                        <button type="button" className="btn btn-secondary" onClick={() => navigate('..')}>Back</button>
                    </form>
                </>
            }
        </>
    )
}

export default EditEmp