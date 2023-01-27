import './TodoApp.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LogoutComponent from './Logout'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodoComponent from './ListTodoComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'


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









