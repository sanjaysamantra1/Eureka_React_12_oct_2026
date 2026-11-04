import CounterDemo1 from "../counter/CounterDemo1";
import CounterDemo2 from "../counter/CounterDemo2";
import EvenOdd from "../state/EvenOdd";
import StateAssignment1 from "../state/StateAssignment1";
import StateDemo1 from "../state/StateDemo1";

export default function Body() {
    return <div style={{ minHeight: "350px" }} id="body">
        {/* This is Body Component */}
        {/* <CounterDemo1 /> */}
        {/* <CounterDemo2 /> */}
        {/* <StateDemo1/> */}
        {/* <EvenOdd/> */}
        <StateAssignment1/>
    </div>
}