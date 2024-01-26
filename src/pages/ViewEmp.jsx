import React from 'react'
import { useNavigate } from 'react-router-dom';

const ViewEmp = () => {

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

            <h2>Borderless Table</h2>
            <p>The .table-borderless class removes borders from the table:</p>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Emain</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default ViewEmp