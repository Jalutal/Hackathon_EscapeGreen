import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import { useEffect, useState } from "react";

const Services = () => {
    // Initalisation
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [servicesInfo, setServicesInfo] = useState(null)

    

    const prixHT = 10; // Remplace cette valeur par le prix HT que tu as
    const tauxTVA = 5.5; // Taux de TVA en pourcentage

    const prixTTC = prixHT * (1 + tauxTVA / 100); // Calcul du prix TTC    
    console.log(`Le prix TTC est de ${prixTTC.toFixed(2)}€`); // Affichage du résultat

    // UseEffect
    useEffect(() =>{
        setServicesInfo(
            {
                id:1,
                name:"Séjour au camping Paradis",
                description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae eaque perspiciatis. Mollitia quam quas, voluptas eius harum aut maxime dolore rem minus! Natus consequatur saepe voluptas illo quasi provident.",
                price_ht:10,
                price_prop:null,
                tva:5.5,
                city:"Marseille",
                longtitude:"43° 17′ 47″ nord",
                latitude:"5° 22′ 12″ est",
                sponsor:1,
                type:1
    
            }
        )
    }, [])


    return(
        <>
            <Header />
            <main className="main-container services">

                {servicesInfo? (
                <div className="container serviceList serviceCard">
                    <ul className="services Card-Info">
                        <li className="card-group">
                            Nom du service : 
                        </li>
                        <li className="card-group">
                            Nom de la société partenaire :
                        </li>
                        <li className="card-group">
                            Nom du type de service :
                        </li>
                        <li className="card-group card-">
                            Prix HT:
                        </li>
                        <li className="card-group">
                            Prix TTC :
                        </li>
                        <li className="card-group">
                            Nombre de personnes :
                        </li>
                        <li className="card-group"></li>
                    </ul>
                    <div className="services society">
                        <h4>Nom de la société partenaire :</h4>
                        <div className="society society-Info">
                            <p>Description du service :</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veniam illo itaque quibusdam illum nostrum dignissimos minima nobis distinctio? Illum voluptate explicabo vero velit neque quidem rem ea sapiente dolore.
                            </p>
                        </div>
                        <div className="society society-Img">
                            <img src="" className="img-fluid" alt="" srcset="" />
                        </div>
                    </div>
                    <div className="images-Galery">
                        <p>Images :</p>
                        <div>GaleryImgList</div>
                    </div>
                    <button>Ajouter ce service au panier</button> 
                </div>
                ) : (
                <div className="container card-loading serviceCard">
                        En Cours de chargement
                </div>
                )}
            </main>
            <Footer />    
        </>
    )
}

export default Services;