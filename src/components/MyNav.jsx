import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import menuDark from '../images/menuDark.png';
import menuLight from '../images/menuLight.png';

const MyNav = (props) => {
    const location = useLocation();
    let variant = props.variant;
    return (
        <Navbar collapseOnSelect expand="lg" className="my-nav" variant={variant}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <img src={variant === 'light' ? menuLight : menuDark} alt="menu icon"/>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav-links box-shadow">
                <Link 
                        className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
                        to="/">
                            Home
                    </Link>
                    <Link 
                        className={location.pathname === '/profile' ? 'nav-link active' : 'nav-link'}
                        to="/profile">
                            Profile 
                    </Link>
                    <Link
                        className={location.pathname === '/education' ? 'nav-link active' : 'nav-link'}
                        to="/education">
                            Education
                    </Link>
                    <Link 
                        className={location.pathname === '/experience' ? 'nav-link active' : 'nav-link'}
                        to="/experience">
                            Work Experience
                    </Link>
                    <Link 
                        className={location.pathname === '/softskills' ? 'nav-link active' : 'nav-link'}
                        to="/softskills">
                            Soft Skills
                    </Link>
                    <Link 
                        className={location.pathname === '/techskills' ? 'nav-link active' : 'nav-link'}
                        to="/techskills">
                            Tech Skills
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default MyNav;