import React from 'react'
import { useNavigate } from 'react-router-dom';

const FetchEmployee = ({empId = 0}) => {


    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const empId = formData.get('empId');

        console.info( empId );
        navigate('/edit/'+empId);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">Employee Id</span>
                </div>

                <input type="text" className="form-control" defaultValue={empId} name="empId" aria-label="Recipient's username" aria-describedby="basic-addon2" />

                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">Fetch</button>
                </div>

            </div>
        </form>
    )
}

export default FetchEmployee