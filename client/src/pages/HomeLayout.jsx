import {Outlet} from "react-router-dom";

const HomeLayout = () => {
    return (
        <>
            {/*Provides the Children Pages*/}
            <Outlet />
        </>
    )
}

export default HomeLayout;