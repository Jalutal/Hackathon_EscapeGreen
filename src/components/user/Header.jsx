import "./header.scss";
import img from '../../assets/img/ChildWood.ai.png';

const Header = () => {

    return (
        <>
        <div className="header_color"></div>
        <div className="nav_header">
        <div><a href="/"><img src={img}></img></a></div>
        <ul className="nav">
            <li><a href="/login">MON COMPTE</a></li>
            <li><a href="/contact">CONTACT</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li><a href="/recherche">RECHERCHE</a></li>
            <li><a href="/panier">PANIER</a></li>          
        </ul>
        </div></>
    )
}

export default Header;