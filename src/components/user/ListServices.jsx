import React from 'react';

const ListServices = ({ name, sponsorName, city, prixTTC }) => {
    return (
        <div className="services">
            <div className="service">
                <h2>{name}</h2>
                <h3>{sponsorName}</h3>
                <img src="" alt="Rien pour l'instant" />
                <p>{city}</p>
                <p>Tarif : {prixTTC + "€/personne TTC"}</p>
                <button>Ajouter au panier</button>
            </div>
        </div>
    );
};

export default ListServices;