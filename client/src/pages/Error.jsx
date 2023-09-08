import {Link, useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    console.log('Error occurred is:', error)
    return (
        <div>
            <h1>Error Layout</h1>
            <Link to='/'>back home</Link>
        </div>
    )
}

export default Error;