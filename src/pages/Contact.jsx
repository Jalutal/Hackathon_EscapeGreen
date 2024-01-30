import Header from '../components/user/Header';
import Footer from '../components/user/Footer';


const Contact = () => {
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