import { Link, useParams } from "react-router-dom";
// import axios from 'axios'

export default function WelcomeComponent() {

    const {username} = useParams()

    // // function callHelloWorldRestApi(){
    // //     console.log("called!")
    // //     axios.get('http://localhost:8080/hello-world')
    // //     .then((response) => successfulResponse(response))
    // //     .catch((error) => successfulErrorResponse(error))
    // //     .finally(() => console.log('cleanup'))

    // // }

    // function successfulResponse(response){
    //     console.log(response)
    // }

    // function successfulErrorResponse(error){
    //     console.log(error)
    // }

    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Your todos. <Link to='/todos'>List of Todos</Link>
            </div>
            {/* <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World REST api
                </button>
            </div> */}
        </div>
    )
}
