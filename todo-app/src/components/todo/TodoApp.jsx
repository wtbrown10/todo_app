import './TodoApp.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import LogoutComponent from './Logout'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodoComponent from './ListTodoComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'

function AuthenticatedRoute({children}) {
    const authContext = useAuth()

    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
    
}

export default function TodoApp() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                        <Routes>
                            <Route path='/' element={<LoginComponent />} />
                            <Route path='/login' element={<LoginComponent />} />

                            <Route path='/welcome/:username' element={
                                <AuthenticatedRoute>
                                    <WelcomeComponent />
                                </AuthenticatedRoute>} />

                            <Route path='/todos' element={
                                <AuthenticatedRoute>
                                    <ListTodoComponent />
                                </AuthenticatedRoute>} />

                            <Route path='/logout' element={
                                <AuthenticatedRoute>
                                    <LogoutComponent />
                                </AuthenticatedRoute>} />

                            <Route path='*' element={<ErrorComponent />} />
                            
                        </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}









