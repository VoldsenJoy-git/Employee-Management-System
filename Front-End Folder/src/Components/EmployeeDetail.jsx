import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/employee/detail/${id}`)
            .then(result => {
                setEmployee(result.data[0]);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleLogout = () => {
        axios.get('http://localhost:3000/employee/logout')
            .then(result => {
                if (result.data.Status) {
                    localStorage.removeItem("valid");
                    navigate('/');
                }
            }).catch(err => console.log(err));
    }

    return (
        <div style={{ 
            backgroundColor: '#1E1E2F', 
            color: '#EAEAEA', 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '20px' 
        }}>
            <div style={{ 
                backgroundColor: '#2A2A3D', 
                padding: '20px', 
                borderRadius: '10px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)', 
                width: '90%', 
                maxWidth: '600px', 
                textAlign: 'center' 
            }}>
                <h4 style={{ marginBottom: '20px' }}>Employee Management System</h4>
                <img 
                    src={`http://localhost:3000/Images/${employee.image}`} 
                    alt={employee.name} 
                    style={{ 
                        width: '100%', 
                        height: 'auto', 
                        borderRadius: '10px', 
                        border: '4px solid #4A90E2', 
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
                        marginBottom: '20px' 
                    }} 
                />
                <h3 style={{ margin: '10px 0' }}>Name: {employee.name}</h3>
                <h3 style={{ margin: '10px 0' }}>Email: {employee.email}</h3>
                <h3 style={{ margin: '10px 0' }}>Salary: {employee.salary} LPA</h3>
                <div style={{ marginTop: '20px' }}>
                    <button 
                        className='btn btn-danger' 
                        onClick={handleLogout}
                        style={{ 
                            backgroundColor: '#E94E77', 
                            borderColor: '#E94E77', 
                            borderRadius: '5px', 
                            padding: '10px 20px' 
                        }}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EmployeeDetail;
