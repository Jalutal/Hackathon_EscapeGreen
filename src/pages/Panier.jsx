import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import React, { useState } from 'react';


const Panier = () => {
    // Init
    const prixHT = 10; // Remplace cette valeur par le prix HT que tu as
    const tauxTVA = 5.5; // Taux de TVA en pourcentage

    // Fonction de calcul de Prix (Selon type service et de son taux TVA Associé)
    const CalculPrix = (prixHT, tauxTVA) =>{}
    const prixTTC = prixHT * (1 + tauxTVA / 100); // Calcul du prix TTC    
    console.log(`Le prix TTC est de ${prixTTC.toFixed(2)}€`); // Affichage du résultat

    const [servicesInfo, setServicesInfo] = useState(null)
    // Init State
        // Value
    const [isChecked, setChecked] = useState(false);
        // Error
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [validationMessage, SetValidationMessage] = useState("Votre demande a bien été envoyé");
    const handleCheckboxChange = () => {
    setChecked(!isChecked);};

    // Function


    return(
        <>
            <Header />
            <main className="main-container reservation-main">
                <h2 className="title-main">Panier</h2>
                <form className="container reservations reservation-content">
                    {/* Profil User */}
                    <div className="reservation user-Info">
                        <p>Information Du Client</p>
                        <div className="reservation formItem">
                            <label htmlFor="firstName">Prénom: </label>
                            <input type="text" name="firstName" id="firstName" required />
                        </div>
                        <div className="reservation formItem">
                            <label htmlFor="lastName">Nom: </label>
                            <input type="text" name="lastName" id="lastName" required />
                        </div>
                        <div className="reservation formItem">
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="reservation formItem">
                            <label htmlFor="phone"></label>
                            <input type="tel" name="phone" id="phone"  pattern="[0-9]{10}" required/>
                        </div>
                    </div>
                    <div className="reservation servicesList">
                        <div className="form-card service-card">
                            <h5 className="service-title">Nom du service</h5>
                            

                            <input type="button" value="deleted" />
                        </div>
                    </div>
                </form>
            </main>
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