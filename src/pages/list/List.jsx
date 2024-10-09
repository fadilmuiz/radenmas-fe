import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, deleteUserMiddleware, editProduct } from '../../stores/action/actionCreator';
import Navbar from '../../component/Navbar';
import './list.css';

const ListUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [editData, setEditData] = useState({ exp: '', level: '', point: '' });

  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUserMiddleware(id));
    window.location.reload();
  };

  const handleEdit = (user) => {
    setEditMode(true);
    setCurrentUser(user);
    setEditData({ exp: user.exp, level: user.level, point: user.point });
  };
  
  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedUser = { ...currentUser, ...editData };
    dispatch(editProduct(updatedUser, currentUser.id));
    setEditMode(false);
    window.location.reload();
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  return (
    <>
      <Navbar />
      <div className="list-user-page">
        <h1 style={{color: "white"}}>List of Users</h1>
        <table className="user-table">
          <thead>
            <tr style={{color: "white"}}>
              <th>NO</th>
              <th>Name</th>
              <th>No Hp</th>
              <th>Point</th>
              <th>Exp</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody style={{color: "white"}}>
            {users?.users?.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.nameUser}</td>
                <td>{user.noHp}</td>
                <td>{user.point}</td>
                <td>{user.exp}</td>
                <td>{user.level}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button style={{backgroundColor:"red"}} onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editMode && (
          <div className="edit-user-modal">
            <h2 style={{color:"black"}}>Edit User</h2>
            <label style={{color:"black"}}>Exp</label>
            <input style={{ textAlign: "center"}}
              type="text"
              name="exp"
              value={editData.exp}
              onChange={handleChange}
            />
            <label style={{color:"black"}}>Level</label>
            <input style={{ textAlign: "center"}}
              type="text"
              name="level"
              value={editData.level}
              onChange={handleChange}
            />
            <label style={{color:"black"}}>Point</label>
            <input style={{ textAlign: "center"}}
              type="text"
              name="point"
              value={editData.point}
              onChange={handleChange}
            />
            <button style={{margin:"10px", backgroundColor: "green", height: "30px", width: "60px" , borderRadius: "5px", cursor: "pointer"}}  onClick={handleSaveEdit}>Save</button>
            <button style={{margin:"10px", backgroundColor: "red", height: "30px", width: "60px" , borderRadius: "5px", cursor: "pointer"}} onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        )}
      </div>
    </>
  );
};

export default ListUser;

