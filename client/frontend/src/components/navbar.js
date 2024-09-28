import './Navbar.css';
import homeIcon from '../Assets/homeIcon.svg';
import personIcon from '../Assets/personIcon.svg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="links">
                <a href="home">
                    <img src={homeIcon} alt="Home" />
                </a>
                <a href="profile">
                    <img src={personIcon} alt="Profile" />
                </a>
            </div>
        </div>
    );
}

export default Navbar;