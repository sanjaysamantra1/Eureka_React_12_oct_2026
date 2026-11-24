import { Route, Routes } from "react-router";
import CounterDemo1 from "../counter/CounterDemo1";
import CounterDemo2 from "../counter/CounterDemo2";
import Addition from "../events/Addition";
import EmployeeForm from "../events/EmployeeForm";
import EventDemo1 from "../events/EventDemo1";
import ControlledFormDemo1 from "../form/ControlledFormDemo1";
import FormDemo1 from "../form/FormDemo1";
import FormikDemo1 from "../form/FormikDemo1";
import UnControlledFormDemo1 from "../form/UnControlledFormDemo1";
import UseEffectDemo1 from "../hooks/UseEffectDemo1";
import UseEffectDemo2 from "../hooks/UseEffectDemo2";
import UserDetails from "../hooks/UserDetails";
import CommentTableAxios from "../http/CommentTableAxios";
import PhotoTableAxios from "../http/PhotoTableAxios";
import UserTable from "../http/UserTable";
import UserTableAxios from "../http/UserTableAxios";
import FruitList from "../list/FruitList";
const ProductList = lazy(() => import('../list/ProductList')) // Dynamic Import

import Products from "../list/Products";
import ProductSearch from "../list/ProductSearch";
import TaskList from "../list/TaskList";
import UserList from "../list/UserList";
import ParentDemo from "../misc/ParentDemo";
import PureDemo from "../misc/PureDemo";
import PureDemo2 from "../misc/PureDemo2";
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
import Home from "../routing/Home";
import AboutUs from "../routing/AboutUs";
import Careers from "../routing/Careers";
import ContactUs from "../routing/ContactUs";
import NotFound from "../routing/NotFound";
import UserDetail from "../routing/UserDetail";
import ProductDetails from "../routing/ProductDetails";
import PermanentJobs from "../routing/PermanentJobs";
import ContractJobs from "../routing/ContractJobs";
import UploadVideos from "../routing/UploadVideos";
import ProtectedRoute from "../routing/ProtectedRoute";
import { lazy, Suspense } from "react";

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
        {/* <EmployeeCRUD/> */}
        {/* <Products/> */}
        {/* <EventDemo1 /> */}
        {/* <Addition/> */}
        {/* <EmployeeForm/> */}
        {/* <PureDemo/> */}
        {/* <PureDemo2/> */}
        {/* <ParentDemo/> */}
        {/* <ProductSearch/> */}
        {/* <UseEffectDemo1/> */}
        {/* <UseEffectDemo2 /> */}
        {/* <UserDetails /> */}
        {/* <FormDemo1 /> */}
        {/* <ControlledFormDemo1/> */}
        {/* <UnControlledFormDemo1/> */}
        {/* <FormikDemo1/> */}
        {/* <UserTable/> */}
        {/* <UserTableAxios/> */}
        {/* <PhotoTableAxios/>
        <CommentTableAxios /> */}
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/careers" element={<Careers />}>
                <Route index element={<PermanentJobs />} />
                <Route path="/careers/permanent" element={<PermanentJobs />} />
                <Route path="/careers/contract" element={<ContractJobs />} />
            </Route>
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/users" element={<UserList />} />
            <Route path="/userdetail/:id" element={<UserDetail />} />
            <Route exact path="/products" element={
                <Suspense fallback={<div>Loading...</div>}>
                    <ProductList />
                </Suspense>
            } />
            <Route exact path="/productdetails" element={<ProductDetails />} />
            <Route exact path="/upload" element={
                <ProtectedRoute>
                    <UploadVideos />
                </ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
}