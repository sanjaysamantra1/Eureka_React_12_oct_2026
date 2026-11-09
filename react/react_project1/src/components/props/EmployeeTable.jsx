import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function EmployeeTable({ employees,deleteEmployee }) {
    return <>
        <h4>Employee Table</h4>

        <table className="table table-bordered table-striped">
            <tbody>
                {employees.map(emp => {
                    return <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.role}</td>
                        <td>{emp.status}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.salary}</td>
                        <td>
                            <FaTrash color='red' onClick={()=>deleteEmployee(emp.id)} />
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
