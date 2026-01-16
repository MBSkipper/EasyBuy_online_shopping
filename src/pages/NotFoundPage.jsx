import { Link } from 'react-router'

function NotFoundPage() {
    return (
        <div>
            <p className="lead fs-4">
                Sorry, we could not find the page you were looking for.
            </p>
            <Link to='/'>Take me back to the EasyBuy landing page</Link>
        </div>
    )
}

export default NotFoundPage