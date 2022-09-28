import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import userService from '../services/user.service';

const UserList = () => {

  const [user, setUser] = useState([]);

  const init = () => {
    userService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setUser(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    userService.remove(id)
      .then(response => {
        console.log('user deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <h3>List of User</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Password</th>
              <th>Role</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {
            user.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.userPassword}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-info" to={`/user/edit/${user.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(user.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default UserList;
