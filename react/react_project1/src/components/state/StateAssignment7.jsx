import { useState } from "react"

export default function StateAssignment7() {
    const [msg, setMessage] = useState('Hello');
    const charCount = msg.length;
    const wordCount = msg.split(' ').length;
    const remainingChar = 100 - msg.length;

    const updateMessage = (event) => {
        const newMessage = event.target.value;
        setMessage(newMessage);
    }
    return <>
        <h3>Create a textarea with maxLength = 100; as the user keeps typing, count and display how many words and how many characters are typed and  also display remaining characters.</h3>

        <textarea maxLength={100} value={msg} onInput={updateMessage}></textarea>
        <div>{msg}</div>
        <h4>charCount:{charCount}</h4>
        <h4>wordCount:{wordCount}</h4>
        <h4>remainingChar:{remainingChar}</h4>
    </>
}
