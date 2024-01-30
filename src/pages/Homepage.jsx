import React from 'react';
import Header from '../components/user/Header';
import Footer from '../components/user/Footer';


const HomePage = () => {
  return (
    <body>
      <main>
        <Header />
        <h1><strong>Escape Green</strong> est une société spécialisée dans l'organisation de voyages en pleine nature.</h1>
        <div>
            Du choix du parcours, aux visites en passant par l'hébergement, Escape Green s'occupe de tout (ou presque), notamment grâce à des sociétés partenaires de confiace !
        </div>
        <h2>Vos étapes jusqu'à votre départ :</h2>
        <div>
            Recherchez les servues pour la période et le nombre de personnes désirée(s)
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