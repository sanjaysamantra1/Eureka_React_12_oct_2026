import CounterDemo1 from "../counter/CounterDemo1";
import CounterDemo2 from "../counter/CounterDemo2";
import FruitList from "../list/FruitList";
import ProductList from "../list/ProductList";
import TaskList from "../list/TaskList";
import UserList from "../list/UserList";
import EmployeeCRUD from "../props/EmployeeCRUD";
import Greet from "../props/Greet";
import MyModal from "../props/MyModal";
import ConditionalCss from "../state/ConditionalCss";
import EvenOdd from "../state/EvenOdd";
import StateAssignment1 from "../state/StateAssignment1";
import StateAssignment6 from "../state/StateAssignment6";
import StateAssignment7 from "../state/StateAssignment7";
import StateAssignment8 from "../state/StateAssignment8";
import StateDemo1 from "../state/StateDemo1";

export default function Body() {
    const sayHello = () => { alert('Helloooo') };

    return <div style={{ minHeight: "350px" }} id="body">
        {/* This is Body Component */}
        {/* <CounterDemo1 /> */}
        {/* <CounterDemo2 /> */}
        {/* <StateDemo1/> */}
        {/* <EvenOdd/> */}
        {/* <StateAssignment1/> */}
        {/* <StateAssignment6/> */}
        {/* <StateAssignment7/> */}
        {/* <StateAssignment8/> */}
        {/* <ConditionalCss /> */}
        {/* <FruitList/> */}
        {/* <UserList/> */}
        {/* <ProductList/> */}
        {/* <TaskList/> */}
        {/* <MyModal>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXVfccEOrpSrEXkcWZxVHkNMeTg3ZvkCBvmCuL77O3g&s=10" alt="" />
        </MyModal> */}
        {/* <Greet name="Somu" msg="Good Morning" sayHello={sayHello} />
        <Greet name="Amar" msg="Good Evening" sayHello={sayHello} /> */}
        <EmployeeCRUD/>
    </div>
}