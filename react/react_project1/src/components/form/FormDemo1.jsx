import React, { useState } from 'react'

export default function FormDemo1() {
    const initialUser = { firstName: '', lastName: '', email: '', phone: '', gender: '' };
    const initialError = { firstName: '', lastName: '', email: '', phone: '', gender: '' };

    const [user, setUser] = useState(initialUser);
    const [error, setError] = useState(initialError);

    const changeHandler = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setUser({ ...user, [fieldName]: fieldValue });

        setError({
            ...error,
            [fieldName]: fieldValue.trim() === "" ? `${fieldName} is required` : "",
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();  // when for is submitted, dont refresh the page
        console.log('Form Data: ', user);
    }
    const resetHandler = () => {
        setUser(initialUser);
    }
    return <>
        <h4>Form Demo 1</h4>

        <form onSubmit={submitHandler} onReset={resetHandler}>
            <p>
                FirstName:
                <input name='firstName' value={user.firstName} onChange={changeHandler} required />
                <span className="text-danger">{error.firstName}</span>
            </p>
            <p>
                lastName:
                <input name='lastName' value={user.lastName} onChange={changeHandler} />
            </p>
            <p>
                email:
                <input name='email' value={user.email} onChange={changeHandler} />
            </p>
            <p>
                phone:
                <input name='phone' value={user.phone} onChange={changeHandler} required />
            </p>
            <p>
                gender:
                <input type="radio" name="gender" value='male' onChange={changeHandler} />
                Male
                <input type="radio" name="gender" value='female' onChange={changeHandler} />
                Female
            </p>

            <input type="submit" value="Submit" className="mx-2" />
            <input type="reset" value="Reset" />
        </form>
        <pre>{JSON.stringify(user, 4)}</pre>
        <pre>{JSON.stringify(error, 4)}</pre>
    </>
}
