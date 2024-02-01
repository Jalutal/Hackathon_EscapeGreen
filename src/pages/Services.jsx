import Header from "../components/user/Header";
import Footer from "../components/user/Footer";

const Services = () => {
    // Initalisation
    const prixHT = 10; // Remplace cette valeur par le prix HT que tu as
    const tauxTVA = 5.5; // Taux de TVA en pourcentage

    const prixTTC = prixHT * (1 + tauxTVA / 100); // Calcul du prix TTC    
    console.log(`Le prix TTC est de ${prixTTC.toFixed(2)}€`); // Affichage du résultat


    return(
        <>
            <Header />
            <p>Nom du service :</p>
            <p>Nom de la société partenaire :</p>
            <p>Nom du type de service :</p>
            <p>Images :</p>
            <p>Description du service :</p>
            <p>Description de la société partenaire + image :</p>
            <p>Prix HT</p>
            <p>Prix TTC :</p>
            <p>Nombre de personnes :</p>
            <button>Ajouter ce service au panier</button>  
            <p>Autres services proposés :</p>
            <Footer />    
        </>
    )
}

export default Services;