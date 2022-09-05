import { SyntheticEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const navigate = useNavigate();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        await fetch("http://localhost:3001/signin", {
            method: "POST", headers: {
                'Content-Type': 'application/json'
            }, credentials: "include",
            body: JSON.stringify({ email, password })
        })
        setRedirect(true)
    }
    if (redirect) {
        navigate('/', { replace: true })
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
                <input type="email" className="form-control" placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
    )
}

export default Login