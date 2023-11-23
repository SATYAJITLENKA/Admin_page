import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditEmployee = ({ employee, onUpdate, onClose }) => {
  const [editedEmployee, setEditedEmployee] = useState({});

  useEffect(() => {

    setEditedEmployee({ ...employee });
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editedEmployee._id)
    try {
      await axios.put(`http://localhost:4000/editEmployee/${editedEmployee._id}`, editedEmployee);
      onUpdate(editedEmployee);
      onClose();
    } catch (error) {
      console.error('Error updating employee:', error.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Edit Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedEmployee.name || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={editedEmployee.email || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-600">
            Mobile No
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={editedEmployee.mobile || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="designation" className="block text-sm font-medium text-gray-600">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={editedEmployee.designation || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={editedEmployee.gender || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="courses" className="block text-sm font-medium text-gray-600">
            Courses
          </label>
          <input
            type="text"
            id="courses"
            name="courses"
            value={(editedEmployee.courses && editedEmployee.courses.join(', ')) || ''}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div> */}
       
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
