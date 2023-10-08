import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {
    HomeLayout,
    Landing,
    Register,
    Login,
    DashboardLayout,
    Error,
    AddJob,
    Stats,
    AllJobs,
    Profile,
    Admin,
    EditJob
} from './pages';
import { action as registerAction } from './pages/Register.jsx';
import { action as loginAction } from './pages/Login.jsx';
import { loader as dashboardLoader } from './pages/DashboardLayout.jsx';
import { action as addJobAction } from './pages/AddJob.jsx';
import { loader as allJobsLoader } from './pages/AllJobs.jsx';
import { loader as editJobLoader } from './pages/EditJob';
import { action as editJobAction } from './pages/EditJob';
import { action as deleteJobAction } from './pages/DeleteJob';
import { loader as adminLoader } from './pages/Admin.jsx';
import { action as profileAction } from './pages/Profile.jsx';
import { loader as statsLoader } from './pages/Stats.jsx';

export const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
};

checkDefaultTheme();

const routerPaths = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                /*Making index refers to the page that will be shown in HomeLayout
                or Parent path. It displays the content of element provided in it.
                for e.g. Landing page here */
                index: true,
                element: <Landing />,
            },
            {
                //renamed path /register to register as it's relative to parent
                path: 'register',
                element: <Register />,
                // action: () => { //actions always needs a return (value /fn /redirect /error /null/ anything)
                //     console.log('hello there');
                //     return null;
                // },
                action: registerAction
            },
            {
                path: 'login',
                element: <Login />,
                action: loginAction
            },
            {
                path: 'dashboard',
                element: <DashboardLayout />,
                loader: dashboardLoader,
                children: [
                    {
                        index: true,
                        element: <AddJob/>,
                        action: addJobAction
                    },
                    {
                        path: 'stats',
                        element: <Stats/>,
                        loader: statsLoader
                    },
                    {
                        path: 'all-jobs',
                        element: <AllJobs/>,
                        loader: allJobsLoader
                    },
                    {
                        path: 'profile',
                        element: <Profile/>,
                        action: profileAction
                    },
                    {
                        path: 'admin',
                        element: <Admin/>,
                        loader: adminLoader,
                    },
                    {
                        path: 'edit-job/:id',
                        element: <EditJob />,
                        loader: editJobLoader,
                        action: editJobAction,
                    },
                    {
                        path: 'delete-job/:id',
                        action: deleteJobAction
                    },
                ]
            },
        ]
    },

    // Sample code for multi-line argument.
    // {
    //     path: '/about',
    //     element: (<div><h1>About</h1></div>),
    // },
])
 const App = () => {
   return <RouterProvider router={routerPaths} />
 }

export default App
