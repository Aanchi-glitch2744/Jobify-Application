import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1>Login Layout</h1>
            <Link to={'/register'}>Register Page</Link>
        </div>
    )
}

export default Login;