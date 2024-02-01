import React, { useState } from 'react';
import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import style from "../assets/modules/Recherche.module.css";
import ListServices from '../components/user/ListServices';


const Recherche = () => {
    const [services, setServices] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("recherche effectuée");

        try {
            const response = await fetch('http://localhost:8081/api/services');
            const servicesData = await response.json();
            console.log(servicesData);

            const updatedServices = servicesData.map((service) => {
                const prixHT = service.price_ht;
                const tauxTVA = service.tva;
                const prixTTC = prixHT * (1 + tauxTVA / 100);

                // Ajouter la propriété prixTTC à chaque service
                return {
                    ...service,
                    prixTTC: prixTTC.toFixed(2)
                };
            });

            setServices(updatedServices);
        } catch (error) {
            console.error('Erreur:', error.message);
        }
    };

    const [startDate, setStartDate] = useState(getTodayDate());
    const [endDate, setEndDate] = useState(getTodayDate());

    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        let month = (today.getMonth() + 1).toString().padStart(2, '0');
        let day = today.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const handleDateChange = (e, dateType) => {
        const selectedDate = e.target.value;
    
        // Sépare les composants de la date (année, mois, jour)
        const [year, month, day] = selectedDate.split('-');
    
        // Formatage de la date au format "YYYY-MM-DD"
        const isoFormattedDate = `${year}-${month}-${day}`;
        console.log(isoFormattedDate);
    
        if (dateType === 'startDate') {
            setStartDate(isoFormattedDate);
        } else if (dateType === 'endDate') {
            setEndDate(isoFormattedDate);
        }
    };

  
    
    return (
            <>
            <Header />
            <main>
                <h1 className={style.searchpage}>Recherche de service</h1>
                <form className={style.filters} onSubmit={handleSubmit}>
                    <label htmlFor="city"><span>Où</span> : 
                        <input type="text" id="city" placeholder="Ville ou code postal" />
                    </label>

                    <label htmlFor="dateDebut"><span>Date de début</span> : 
                        <input type="date" id="dateDebut" name="dateDebut" value={startDate} min={getTodayDate()} onChange={(e) => handleDateChange(e, 'startDate')} />
                    </label>

                    <label htmlFor="dateFin"><span>Date de fin</span> : 
                        <input type="date" id="dateFin" name="dateFin" value={endDate} min={getTodayDate()} onChange={(e) => handleDateChange(e, 'endDate')} />
                    </label>

                    <div className={style.typeGroup}>
                        <label><span>Types de service souhaité</span> :</label>
                        <input type="checkbox" id="hebergement" name="hebergement" value="hebergement" />
                        <label htmlFor="hebergement">Hébergement</label>

                        <input type="checkbox" id="restau" name="restau" value="restau" />
                        <label htmlFor="restau">Restauration & bars</label>

                        <input type="checkbox" id="visites" name="visites" value="visites" />
                        <label htmlFor="visites">Visites</label>

                        <input type="checkbox" id="activites" name="activites" value="activites" />
                        <label htmlFor="activites">Activités</label>

                        <input type="checkbox" id="loc" name="loc" value="loc" />
                        <label htmlFor="loc">Location de véhicules</label>
                    </div>
                    <label htmlFor="nbPeople"><span>Nombre de personnes</span> : 
                        <input type="number" id="nbPeople" min="1" placeholder="1" />
                    </label>

                    <button className={style.subBtn} type="submit" onSubmit={handleSubmit}>Rechercher</button>
                </form>

                {/* Utilisation du composant ListServices avec les propriétés des services */}
                <div className={style.services}>
                {services.map((service) => (
                    <ListServices
                        key={service.id}
                        id={service.id}
                        name={service.name}
                        sponsorName={service.sponsor_name}
                        city={service.city}
                        prixTTC={service.prixTTC}
                    />
                ))}
                </div>
            </main>

            <Footer />    
        </>
    );
};

export default Recherche;