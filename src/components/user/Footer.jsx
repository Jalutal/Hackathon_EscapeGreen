import "./footer.scss";
import logo01 from '../../assets/img/facebook.png';
import logo02 from '../../assets/img/twitter.png';
import logo03 from '../../assets/img/insta.png';
import logo04 from '../../assets/img/snap.png';
import logo05 from '../../assets/img/twitch.png';
import logo06 from '../../assets/img/tidal.png';
import logo07 from '../../assets/img/youtube.png';
import logo from '../../assets/img/ChildWood.ai.png';

const Footer = () => {

    return (
        <footer>
        <div className="social">
            <img src={logo01} alt="" />
            <img src={logo02} alt="" />
            <img src={logo03} alt="" />
            <img src={logo04} alt="" />
            <img src={logo05} alt="" />
            <img src={logo06} alt="" />
            <img src={logo07} alt="" />
        </div>
        <div className="mentions">
            <div className="mention_div">
                <p>&gt; CGV</p>
                <p>&gt; FAQ</p>
                <p>&gt; MENTIONS LEGALES</p>
                <p>&gt; COMMENTAIRES</p>
                <p>&gt; SERVICE CLIENT</p>
            </div>
            <div className="mention_div">
                <img src={logo} alt="" />
            </div>
            <div className="mention_div">
                <p>INSCRIPTION A LA NEWSLETTER</p>
                <div>
                  <input type="text" id="newsletter" name="newsletter" required />
                </div>
                <label>
                <input type="checkbox" />
                 J'accepte que mes données soient stockées et <br />utilisées pour répondre à ma demande.
                </label>
            </div>
        </div>
        <div className="address">
        <p>82, Quai des Chartrons, 33000, Bordeaux</p>
        <p>E-Mail: escapegreen@yahoo.fr</p>
        <p>Telephone 05 57 87 67 70</p>
        </div>
        <div className="footer_color">
            <p>© Escape Green 2024 - Création : Carmen Anita Rodriguez, Intégration : Equipe Dev 02.</p>
        </div>
        </footer>
    )
}

export default Footer;