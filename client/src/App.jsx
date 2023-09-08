import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {
    HomeLayout,
    Landing,
    Register,
    Login,
    DashboardLayout,
    Error,
} from './pages';

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
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'dashboard',
                element: <DashboardLayout />,
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
