import { Link, useParams } from "react-router-dom";

export default function WelcomeComponent() {

    const {username} = useParams()

    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Your todos. <Link to='/todos'>List of Todos</Link>
            </div>
        </div>
    )
}
