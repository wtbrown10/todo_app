import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { retrieveAllTodosForUsernameApi, deleteTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

export default function ListTodoComponent() {

    const today = new Date();

    const navigate = useNavigate()

    const authContext = useAuth()

    const username = authContext.username

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    useEffect(
        () => {
            refreshTodos()}, []
    )

    function refreshTodos(){
    retrieveAllTodosForUsernameApi(username)
        .then(response => {
            setTodos(response.data)
        }
        )
        .catch(error => console.log(error))
        .finally()
    }
    // useEffect(
    //     () => {
    //         refreshTodos()}, []
    // )

    function deleteTodo(id){
        console.log("clicked: " + id)
        deleteTodoApi(username, id)
        .then(
            () => {
                setMessage(`Delete of todo with id: ${id} succesfull`)
                refreshTodos()
            }
        )
        .catch()
        .finally()
    }

    function updateTodo(id){
        console.log("clicked: " + id)
        navigate(`/todo/${id}`)
        // deleteTodoApi(username, id)
        
    }

    function addNewTodo(){
        navigate(`/todo/-1`)
    }


    return(
        <div className="container">
            <h1>Things You Want To Do!</h1>
            {message && <div className=" alert alert-warning">{message}</div>}
            <div>
                <table className='table' >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>

                    </thead>
                        <tbody>
                        {
                            todos.map(todo => (
                                    <tr key={todo.id}>
                                        {/* <td>{todo.id}</td> */}
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" 
                                        onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" 
                                        onClick={() => updateTodo(todo.id)}>Update</button></td>
                                        </tr>
                            )
                        )
                    }

                        </tbody>
                </table>
            </div>
            <div className="btn btn-success" 
            onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}
