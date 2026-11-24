import { Link, Outlet } from "react-router"

export default function Careers() {
  return <>
    <div>Careers</div>

    <div>
      <Link to="permanent" className="mx-2">Permanent Jobs</Link>
      <Link to="contract">Contract Jobs</Link>
    </div>
    <Outlet />
  </>
}
