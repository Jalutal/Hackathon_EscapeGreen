import React from 'react';
import Header from '../components/user/Header';
import Footer from '../components/user/Footer';
import "./homepage.scss";
import sponso01 from '../assets/img/airbnb.png';
import sponso02 from '../assets/img/booking.png';
import sponso03 from '../assets/img/trivago.png';
import sponso04 from '../assets/img/europcar.png';
import sponso05 from '../assets/img/avis.png';
import sponso06 from '../assets/img/civitatis.png';
import sponso07 from '../assets/img/tiqets.png';
import search from '../assets/img/search.png';
import landscape01 from '../assets/img/landscape01.png';
import landscape02 from '../assets/img/landscape02.png';
import landscape03 from '../assets/img/landscape03.png';


const HomePage = () => {
  return (
    <body>
      <main>
        <Header />
        <div className='bg_home_01'>
            <div className='search_container'>
                <h2>Organisez votre séjour de A à Z</h2>
                <div className='search_bar'>
                    <input type="text" placeholder="Rechercher..." value={0} onChange={0} className='search_inner_bar'/>
                    <img src={search} />
                </div>
                <div className='img_sponsors'>
                    <img src={sponso01} />
                    <img src={sponso02} />
                    <img src={sponso03} />
                    <img src={sponso04} />
                    <img src={sponso05} />
                    <img src={sponso06} />
                    <img src={sponso07} />
                </div>
            </div>
        </div>
        <div className='title'>
            <h1>ESCAPE GREEN</h1>
        </div>
        <div className='bg_home_02'>
            <div className='decouvrez'>
                <p>Découvrez l'aventure Escape Green :</p>
                <p>des excursions captivantes dans les plus beaux recoins</p>
                <p>de la France vous attendent.</p>
                <div className='more'>EN SAVOIR PLUS &gt;</div>
            </div>
            <div className='landscape'>
                <div><img src={landscape01} /></div>
                <div><img src={landscape02} /></div>
                <div><img src={landscape03} /></div>
            </div>
        </div>
        <h1><strong>Escape Green</strong> est une société spécialisée dans l'organisation de voyages en pleine nature.</h1>
        <div>
            Du choix du parcours, aux visites en passant par l'hébergement, Escape Green s'occupe de tout (ou presque), notamment grâce à des sociétés partenaires de confiace !
        </div>
        <h2>Vos étapes jusqu'à votre départ :</h2>
        <div>
            Recherchez les services pour la période et le nombre de personnes désirée(s)
        </div>
        <div>
            Envoyez un devis en ligne via le site
        </div>
        <div>
            L'équipe d'Escape Green vous contacte pour vous présenter votre séjour jour par jour
        </div>
        <div>
            Le paiement s'effectue via une page sécurisée pour confirmer les réservations
        </div>
        <div>
            Vous recevez un mail de confirmation avec le séjour décrit jour par jour
        </div>
        <div>
            Tout est ok, il ne vous reste plus qu'à profiter !
        </div>
        <div>
            Organisation du séjour sur l'ensemble des vacances
        </div>
        <div>
            Réservation du ou des hébergements
        </div>
        <div>
            Réservation d'un véhicule
        </div>
        <div>
            Réservations pour des activités ou des visites
        </div>
        <div>
            Réservations dans des restaurants et bars
        </div>
        
        <Footer />
        </main>
    </body>
  );
};

export default HomePage;