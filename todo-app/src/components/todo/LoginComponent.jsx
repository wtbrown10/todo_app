import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"


export default function LoginComponent() {

    const [username, setUsername] = useState('in28minutes')

    const [password, setPassword] = useState('password')

    const [showSuccesMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    async function handleSubmit(){
        if(await authContext.login(username, password)){
            // setShowSuccessMessage(true)
            // setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            // authContext.setAuthenticated(false)
            // console.log('failed');
            // setShowSuccessMessage(false)
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
