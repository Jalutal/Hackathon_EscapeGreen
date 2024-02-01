import Header from '../components/user/Header';
import Footer from '../components/user/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Contact = () => {
  // Initialisation
  const navigate = useNavigate()
  // Error / Sucess Validation & message
  // Si un état de validation est fait, mettre le message dans la fonction de setValidation et
  // Si c'est un message d'erreur, mettre isError à true
  // Si Succes, mettre isSucces à true avec une fonction de delai timeout() pour désactiver le message ou redirection
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationMessage, SetValidationMessage] = useState("Votre demande a bien été envoyé");

  const AdminAdressContact = "admin@escapegreen.com";

  const handleSendContactFormIntoEmail = (event) =>{
    // Initialisation
    setIsError(false);
    setIsSuccess(false);
    let errorMessage = "";
      // Permet de vérifier le formatage de données (RegEx) textuel pour un téléphone Français
    const phoneRegExp = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g; 
    // Bloquer le refresh de la page
    event.preventDefault()
    // Récupération des champs du formulaire
    const senderNomEtPrenom = event.target.nom.value;
    const senderEmail = event.target.email.value;
    const senderPhone = event.target.phone.value || null;
    const demandObject = event.target.object.value;
    const subjectMessage = event.target.message.value;

    // Verification des données
      // Dans le cas d'une erreur de saisies non valide (ValidationError), afficher ce message
    SetValidationMessage("Saisie(s) Incorecte(s)")
    // Vérification du format des données de téléphone
    // Si le format de données (RegExp) ne correspond pas au format d'un téléphone Français
    // Retourner Erreur
    if (!senderPhone.match(phoneRegExp) && senderPhone) {
      setIsError(true)
    };
  }


  // Affichage
  return (
      <main>
        <div>
          <Header />
          <div>
            <h1>Bienvenue sur la page de contact</h1>
            <p>Laissez-nous votre message, nous y répondrons dans les meilleurs délais.</p>
            <form action="mailto:jesse.granier@lapiscine.pro" method="post" encType="text/plain">
                <div>
                <div>
                  <label htmlFor="nom">Prénom et Nom :</label>
                </div>
                <div>
                  <input type="text" id="nom" name="nom" required />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="email">Email :</label>
                </div>
                <div>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="phone">Téléphone (facultatif) :</label>
                </div>
                <div>
                  <input type="text" id="phone" name="phone" />
                </div>
                </div>
                <div>
                    <label htmlFor="object">Objet :</label>
                    <select id="object" name="object">
                        <option value="reservation">Réservation</option>
                        <option value="professional">Contact professionnel</option>
                        <option value="other">Autre</option>
                    </select>
                </div>
                <div>
                  <div>
                    <label htmlFor="message">Message :</label>
                  </div>
                  <div>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                </div>
                <div>
                  <input type="submit" value="Envoyer" />
                </div>
              </form>
              <section>
          <h2>Escape Green</h2>
          <p>Adresse du siège social : 1 rue de la plaine d'Hyrule, 33000 Bordeaux</p>
          <p>Téléphone : 0612457832</p>
          <p>Adresse e-mail : escape.green@lapiscine.pro</p>
        </section>
            </div>
          </div>
        <Footer />
      </main>
  )
}

export default Contact;