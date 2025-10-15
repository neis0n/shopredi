import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div style={{ textAlign: 'center', marginTop: '10vh', backgroundColor: 'white', padding: '20px', borderRadius: '8px', color: 'black' }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}


export default NotFound;