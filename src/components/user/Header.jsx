import "./header.scss";
import img from '../../assets/img/ChildWood.ai02.png';

const Header = () => {

    return (
        <>
        <div className="header_color"></div>
        <div className="nav_header">
       
        <ul className="nav">
            <li><a href="/"><img src={img}></img></a></li>
            <li><a href="/login">MON COMPTE</a></li>
            <li><a href="/contact">CONTACT</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li><a href="/panier">PANIER</a></li>
            <li><a href="/recherche">RESERVATIONS</a></li>         
            <li>DEMANDER UN DEVIS GRATUIT</li> 
            <li>NOS PARTENAIRES</li>
        </ul>
        </div></>
    )
}

export default Header;