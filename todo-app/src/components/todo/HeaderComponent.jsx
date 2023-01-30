import { Link } from "react-router-dom"
import { useAuth } from "./security/AuthContext"



export default function HeaderComponent() {

    // const authContext = useContext(AuthContext)
    function logout() {
        authContext.logout()
    }
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    console.log(authContext)

    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {isAuthenticated 
                                    && <Link className="nav-link" to="/welcome/in28minutes">Home</Link>}
                                </li>

                                <li className="nav-item fs-5">
                                    {isAuthenticated 
                                    && <Link className="nav-link" to="/todos">Todos</Link>}
                                </li>
                            </ul>
                        </div>

                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {!isAuthenticated 
                                && <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {isAuthenticated && 
                                <Link className="nav-link" onClick={logout} to="/logout">Logout</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
