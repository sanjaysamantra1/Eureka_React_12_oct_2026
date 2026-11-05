import { useState } from "react"

export default function StateAssignment8() {
    const [num1, setNum1] = useState(10);
    const [num2, setNum2] = useState(20);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState('');

    const updateNum1 = (event) => {
        setNum1(event.target.value);
    }
    const calculate = ()=>{
        switch(operator){
            case '+' : setResult(num1 + num2); break;
            case '-' : setResult(num1 - num2); break;
            case '*' : setResult(num1 * num2); break;
            case '/' : setResult(num1 / num2); break;
        }
    }

    return <>
        <h3>Create two input boxes and a dropdown (+ , - , * , /) and perform arithmetic operations based on the selected operator.</h3>

        <input type="number" name="num1" value={num1} onInput={updateNum1} />
        <input type="number" name="num2" value={num2} onInput={(e) => setNum2(e.target.value)} className="mx-2" />

        <select className="mx-2" onChange={(e)=>setOperator(e.target.value)}>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <button className="btn btn-primary" onClick={calculate}>Result</button>

        <div>Num1:{num1} , Num2:{num2}, Operator:{operator}</div>
        <div>Result:{result} </div>
    </>
}
