import { Link } from 'react-router-dom';

const Notfoundpage = () => {
    return (
        <div>
            <h1>Not found page</h1>
            <p>Please visit <Link to="/">Homepage</Link>!</p>
        </div>
    )
}

export {Notfoundpage}