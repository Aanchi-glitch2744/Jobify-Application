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
} from './pages';
import { action as registerAction } from './pages/Register.jsx';
import { action as loginAction } from './pages/Login.jsx';
import { loader as dashboardLoader } from './pages/DashboardLayout.jsx';

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
                    },
                    {
                        path: 'stats',
                        element: <Stats/>,
                    },
                    {
                        path: 'all-jobs',
                        element: <AllJobs/>,
                    },
                    {
                        path: 'profile',
                        element: <Profile/>,
                    },
                    {
                        path: 'admin',
                        element: <Admin/>,
                    }
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
