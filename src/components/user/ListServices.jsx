import React from 'react';
import style from '../../assets/modules/ListServices.module.css';

const ListServices = ({ name, sponsorName, city, prixTTC }) => {
    return (
        <div className={style.service}>
            <h2>{name}</h2>
            <h3>{sponsorName}</h3>
            <img src="" alt="Rien pour l'instant" />
            <p>{city}</p>
            <p>Tarif : {prixTTC + "€/personne TTC"}</p>
            <button>Ajouter au panier</button>
        </div>
    );
};

export default ListServices;