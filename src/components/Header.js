import './Header.css';
import logoLinked from '../resources/linkedin.png';
import logoInsta from '../resources/instagram-logo.png';
import logoPorta from '../resources/facebook.png';

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <p>Explora.</p>
            </div>
            <nav>
                <ul className="nav-Links">
                    <li><img src={logoLinked} alt="Linkedin"></img></li>
                    <li><img src={logoInsta} alt="Github"></img></li>
                    <li><img src={logoPorta} alt="Portafolio"></img></li>
                </ul>
            </nav>
        </div>
    );
}