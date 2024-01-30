import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import React, { useState } from 'react';


const Panier = () => {
    const prixHT = 10; // Remplace cette valeur par le prix HT que tu as
    const tauxTVA = 5.5; // Taux de TVA en pourcentage    
    const prixTTC = prixHT * (1 + tauxTVA / 100); // Calcul du prix TTC    
    console.log(`Le prix TTC est de ${prixTTC.toFixed(2)}€`); // Affichage du résultat

    const [isChecked, setChecked] = useState(false);
    const handleCheckboxChange = () => {
    setChecked(!isChecked);};


    return(
        <>
            <Header />
            <p>Nom du client :</p>
            <p>Tarif TTC (taux de TVA = )</p>
            <p>image principale :</p>
            <p>Si tarif proportionnel au nbre de personnes : nombre de personne ajouté au service</p>

            <h3>Champs obligatoires et modifiables :</h3>
            <p>Date de début et de fin de séjour (si renseigné)</p>
            <p>Nbre de personnes</p>
            <p>Nom de l'utilisateur</p>
            <p>Prénom de l'utilisateur</p>
            <p>Email de l'utilisateur</p>
            <p>Numéro de téléphone de l'utilisateur</p>
            <p>Texte libre (message)</p>
            <p><label>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                J'accepte les CGU
                </label>
            </p>
            <p>Total HT</p>
            <p>Total TVA</p>
            <p>Total TTC</p>


            <h3>Pour chaque service l'utilisateur doit pouvoir</h3>
            <p>Modifier le nbre de personnes</p>
            <p>Supprimer le service</p>
            <Footer />    
        </>
    )
}

export default Panier;