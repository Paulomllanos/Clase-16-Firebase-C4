import { Outlet } from "react-router-dom";
import Navigation from "../../Routes/Navigation";


const Layout = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
    </div>
  )
}

export default Layout