import React from 'react';
import Header from "../components/user/Header";
import Footer from '../components/user/Footer';


const Mentions = () => {
  return (
      <main>
        <div>
        <Header />
        <div>
          <h1>Mentions Légales</h1>
          <section>
          <h2>Escape Green</h2>
          <p>Adresse du siège social : 1 rue de la plaine d'Hyrule, 33000 Bordeaux</p>
          <p>Téléphone : 0612457832</p>
          <p>Adresse e-mail : escape.green@lapiscine.pro</p>
        </section>
        <section>
          <h2>Hébergeur</h2>
          <p>Nom : OVH</p>
          <p>Adresse du siège social : 1 rue dauphone, 75000 Paris</p>
        </section>
        <section>
          <h2>Droits d'auteur</h2>
          <p>Chaque section publiée sur ce site est la propriété de son auteur.</p>
        </section>
        <section>
          <h2>Politique sur l'utilisation du contenu du site</h2>
          <p>Le contenu du site est utilisé uniquement dans le cadre de la préparation de séjours et exclusivement sur ce site.</p>
        </section>
        <section>
          <h2>Collecte et Traitement des Données Personnelles</h2>
          <p>Les données collectées sont le nom d'utilisateur, l'adresse e-mail, le nom de l'utilisateur, le prénom de l'utilisateur, son adresse postale ainsi que son numéro de téléphone. Ces informations sont stockées en base de données pour une durée de 3 ans, après quoi elles sont effacées.</p>
        </section>
        <section>
          <h2>Politique de Confidentialité</h2>
          <p>Les données personnelles ne sont pas revendues à des sociétés tierces.</p>
        </section>
        <section>
          <h2>Conformité au RGPD</h2>
          <p>Ce site est conforme au Règlement Général sur la Protection des Données (RGPD).</p>
        </section>
        <section>
          <h2>Modalités de Résiliation du Compte</h2>
          <p>Chaque utilisateur a le pouvoir de supprimer lui-même son compte. Si cela est impossible, il peut contacter un administrateur qui s'occupera de cette démarche dans les meilleurs délais.</p>
        </section>
        <section>
          <h2>Politique sur l'Utilisation des Cookies</h2>
          <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur et assurer son bon fonctionnement.</p>
          <p>Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous naviguez sur le site. Ils ne collectent aucune information personnelle identifiable.</p>
          <p>Nous utilisons des cookies pour :</p>
          <ul>
            <p>Assurer le fonctionnement technique du site.</p>
            <p>Personnaliser votre expérience en mémorisant vos préférences.</p>
            <p>Compiler des statistiques anonymes sur l'utilisation du site pour améliorer son contenu.</p>
          </ul>
          <p>En utilisant ce site, vous consentez à l'utilisation de cookies conformément à cette politique.</p>
          <p>Si vous souhaitez désactiver les cookies, vous pouvez le faire en ajustant les paramètres de votre navigateur. Veuillez noter que certaines fonctionnalités du site pourraient ne pas fonctionner correctement sans l'utilisation de cookies.</p>
        </section>
        <p>Pour toute question ou préoccupation concernant ces mentions légales, veuillez nous contacter à l'adresse e-mail mentionnée ci-dessus.</p>
      </div>
    </div>
    <Footer />
  </main>
  );
}

export default Mentions;
