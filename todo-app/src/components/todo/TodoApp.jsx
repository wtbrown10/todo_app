import { useState } from 'react'
import './TodoApp.css'
import {BrowserRouter, Route, Routes, useNavigate, useParams, Link} from 'react-router-dom'

export default function TodoApp() {
    return (
        <div className="App">
                <BrowserRouter>
                    <HeaderComponent />
                        <Routes>
                            <Route path='/' element={<LoginComponent />} />
                            <Route path='/login' element={<LoginComponent />} />
                            <Route path='/welcome/:username' element={<WelcomeComponent />} />
                            <Route path='/todos' element={<ListTodoComponent />} />
                            <Route path='/logout' element={<LogoutComponent />} />

                            <Route path='*' element={<ErrorComponent />} />
                            
                        </Routes>
                    <FooterComponent />
                </BrowserRouter>
            
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('in28minutes')

    const [password, setPassword] = useState('password')

    const [showSuccesMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(username==='in28minutes' && password==='dummy'){
            console.log('success');
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            console.log('failed');
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }

    }

    return(
        <div className="Login">
            <h1>Time to Login!</h1>
            {showSuccesMessage && <div className='successMessage'>Authentication Successfully</div>}
            {showErrorMessage && <div className='errrorMessage'>Authentication Failed. 
                                                                Please check your credentials.</div>}
            {/* <SuccessMessageComponent /> */}
            {/* <ErrorMessageComponent /> */}
                        
            <div className="LoginForm">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}


function WelcomeComponent() {

    const {username} = useParams()

    console.log(username);

    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Your todos. <Link to='/todos'>List of Todos</Link>
            </div>
        </div>
    )
}

function ErrorComponent() {
    return(
        <div className="Error">
            <h1>Apologies for the 404. Reach out to out team at 1800-345-6789.</h1>
        </div>
    )
}

function ListTodoComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [
        {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
        {id: 2, description: 'Learn Python', done: false, targetDate:targetDate},
        {id: 3, description: 'Learn Java', done: false, targetDate:targetDate}
]
    return(
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <div>
                <table className='table' >
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>

                    </thead>
                        <tbody>
                        {
                            todos.map(todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                        </tr>
                            )
                        )
                    }

                        </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent() {
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

function FooterComponent() {
    return(
        <footer className="footer">
            <div className='container'>Your footer</div>
        </footer>
    )
}

function LogoutComponent() {
    return(
        <div className="LogoutComponent">
             <h1>
                You Are Logged Out!
             </h1>
             <body>
                Thank you for using our App. Come back soon!
             </body>
        </div>
    )
}