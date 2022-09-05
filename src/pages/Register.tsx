import { SyntheticEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const navigate = useNavigate();


    const submit = async (e: SyntheticEvent) => {
        console.log({ name, email, password })
        await fetch("http://localhost:3001/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        setRedirect(true)
    }

    if (redirect) {
        navigate("/login", { replace: true });
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            submit(e)
        }}>
            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
            <div className="form-floating">
                <input type="text" className="form-control" placeholder="name ..."
                    onChange={(e) => setName(e.target.value)} />
                <label htmlFor="floatingInput">Name</label>
            </div>
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
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
    )
}

export default Register