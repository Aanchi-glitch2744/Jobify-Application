import Wrapper from '../assets/wrappers/SmallSidebar.js'
import {useDashboardContext} from "../pages/DashboardLayout.jsx";
import {FaTimes} from "react-icons/all.js";
import Logo from "./Logo.jsx";
import links from "../utils/links.jsx";
import {NavLink} from "react-router-dom";

const SmallSidebar = () => {
    const {showSidebar, toggleSidebar} = useDashboardContext()
    return (
        <Wrapper>
            {/*<div className='sidebar-container show-sidebar'>*/}
            <div className={showSidebar ? 'sidebar-container show-sidebar': 'sidebar-container'}>
                <div className='content'>
                    <button type='button' className='close-btn' onClick={toggleSidebar}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <div className='nav-links'>
                        {links.map((link) => {
                            const {text, path, icon} = link;
                            return (
                                <NavLink
                                    to={path}
                                    key={text}
                                    className='nav-link'
                                    onClick={toggleSidebar}
                                    end //sets active class on the endpoint only.
                                >
                                <span className='icon'>{icon}</span>
                                {text}
                            </NavLink>)
                        })};
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSidebar

// import Wrapper from '../assets/wrappers/SmallSidebar';
// import {FaTimes} from "react-icons/all.js";
// import Logo from './Logo';
// import { NavLink } from 'react-router-dom';
// import links from '../utils/links';
// import { useDashboardContext } from '../pages/DashboardLayout';
// import {useEffect} from "react";
//
// const SmallSidebar = () => {
//     const { showSidebar, toggleSidebar } = useDashboardContext();
//
//     useEffect(() => {
//         console.log('showsidebar triggered ', showSidebar)
//     }, [showSidebar]);
//     useEffect(() => {
//         console.log('togglesidebar triggered ', toggleSidebar)
//     }, [toggleSidebar]);
//     return (
//         <Wrapper>
//             <div
//                 className={
//                     showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
//                 }
//             >
//                 <div className='content'>
//                     <button type='button' className='close-btn' onClick={() => toggleSidebar}>
//                         <FaTimes />
//                     </button>
//                     <header>
//                         <Logo />
//                     </header>
//                     <div className='nav-links'>
//                         {links.map((link) => {
//                             const { text, path, icon } = link;
//                             return (
//                                 <NavLink
//                                     to={path}
//                                     key={text}
//                                     className='nav-link'
//                                     onClick={() => toggleSidebar}
//                                     end
//                                 >
//                                     <span className='icon'>{icon}</span>
//                                     {text}
//                                 </NavLink>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </Wrapper>
//     );
// };
//
// export default SmallSidebar;