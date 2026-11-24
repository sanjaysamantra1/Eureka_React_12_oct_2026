import { Navigate } from 'react-router';

export default function ProtectedRoute({ children }) {
    const role = "trainer"; // assume
    if (role === "student") {
        alert('you are not allowed to go to this route')
        return <Navigate to="/home" replace />;
    }
    return children;
}
