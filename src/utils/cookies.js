// Configuration et Gestion des Cookies utilisateurs
// Comme localStorage (getItem, setItem,etc.), js-cookie permet à un navigateur de stocker en front un groupe de données
// Stocké dans le navigateur dans Appli/Cookie, il permet également de garder la connexion même avec la fermeture de session
// Tant que l'expiration du cookie (désigné par un nom, une valeur) est défini (ExpireIn) et que sa durée
// 

// Import
const Cookies = require('js-cookie');

// CookieExpiration Value
const SetCookieExpirationByDay = (timeDay = 7) =>{
    // Retourne le nombre de jour
    return timeDay
}
const SetCookieExpirationByDate = () =>{
    // Set Cookie Expiration (By Second)
    const CookieExpiration = 60 * 60;
    const expireDate = new Date( 
        new Date().getTime() + CookieExpiration * 1000
    );
    return expireDate
}

// Function
const getCookie = (cookieName) =>{
    // Verifie si cookieName existe, sinon retourn null
    let cookie
    try {
        cookie = Cookies.get(cookieName) || null
        console.log("Cookie récupéré", cookieName)
        return cookie;
        
    } catch (error) {
        return cookie = null
    }
}

const setCookie = (cookieName, cookieData, expirationDay = null) =>{
    // Créer Un cookie cookieName
    // Avec le nombre de Jour avant expiration (si défini)
    try {
        if(!expirationDay) return Cookies.set(cookieName, cookieData) // Equivaut à Storage.setItem(cookieName, cookieData)
        const expireDate = SetCookieExpirationByDate(expirationDay);
            return Cookies.set(cookieName, cookieData, { 
            expires: expireDate
        });
    }
    catch (error) {
        return console.log("Erreur de gestion de cookie", error)
    }
    
}

const removeCookie = (cookieName) =>{
    // Supprime un cookie existant
    try {
        return Cookies.remove(cookieName)
    }
    catch (error) {
        return console.log("Erreur de gestion de cookie", error)
    }
}
// Export
module.exports = {
    getCookie, setCookie, removeCookie
}