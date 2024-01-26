import React from 'react'
import EditDelButton from '../components/EditDelButton'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const handleEdit = (id) => {
    console.info('Promt Edit: ', id);
    navigate('edit/'+id);
  }

  const handleDelete = (id) => {
    console.info('Promt Delete: ', id);
  }

  return (
    <>
      <h2>Employees List</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Emain</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            Array.from({ length: 10 }, (_, i) => i + 1).map(
              i =>
                <tr key={i}>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>
                    <EditDelButton onEdit={handleEdit} onDelete={handleDelete} id={i} />
                  </td>
                </tr>)
          }



        </tbody>
      </table>
    </>
  )
}

export default Home