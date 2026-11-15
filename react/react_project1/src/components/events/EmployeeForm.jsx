import React, { useState } from 'react';

export default function EmployeeForm() {
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    /* const firstNameChangeHandler = (e) => {
        setEmployee({ ...employee, firstName: e.target.value });
    };
    const lastNameChangeHandler = (e) => {
        setEmployee({ ...employee, lastName: e.target.value });
    };
    const emailChangeHandler = (e) => {
        setEmployee({ ...employee, email: e.target.value });
    };
    const phoneChangeHandler = (e) => {
        setEmployee({ ...employee, phone: e.target.value });
    }; */

    const changeHandler = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Employee Data:', employee);
    };

    return (
        <>
            <h4>Employee Form</h4>
            <form onSubmit={handleSubmit}>
                <p>
                    First Name:
                    <input name='firstName'
                        type="text"
                        value={employee.firstName}
                        onChange={changeHandler}
                    />
                </p>
                <p>
                    Last Name:
                    <input name='lastName'
                        type="text"
                        value={employee.lastName}
                        onChange={changeHandler}
                    />
                </p>
                <p>
                    Email:
                    <input name='email'
                        type="email"
                        value={employee.email}
                        onChange={changeHandler}
                    />
                </p>
                <p>
                    Phone:
                    <input name='phone'
                        type="tel"
                        value={employee.phone}
                        onChange={changeHandler}
                    />
                </p>
                <button type="submit">Submit</button>
            </form>

            <pre>{JSON.stringify(employee)}</pre>
        </>
    );
}