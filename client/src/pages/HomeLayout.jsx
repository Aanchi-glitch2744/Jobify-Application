import {Outlet} from "react-router-dom";

const HomeLayout = () => {
    return (
        <div>
            {/*Share NavBar across all the children pages*/}
            <nav>Home Layout Navbar</nav>
            {/*Provides the Children Pages*/}
            <Outlet />
        </div>
    )
}

export default HomeLayout;