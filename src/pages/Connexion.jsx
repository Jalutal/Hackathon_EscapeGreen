import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../configs/API_Config";



const Connexion = () => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsSuccess(false);
    setIsError(false);
    const user_name = event.target.user_name.value;
    const password = event.target.password.value;
    const loginData = {
      user_name,
      password,
    };
    const loginDataJson = JSON.stringify(loginData);
    const loginResponse = await fetch(`http://${API.defaultpath}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: loginDataJson,
    }).catch( error =>{
      if (error instanceof TypeError){
          console.log(error)
          setMessage("Erreur de connexion serveur")
          return setIsError(true);
      }
    });
    // Check error
    if(!loginResponse.ok && loginResponse.status >= 500){
      console.log("erreur serveur - Status:", 500)
      setMessage("Erreur de connexion serveur")
      return navigate(`/`);
    }
    if(loginResponse.status >= 400 && loginResponse.status < 500){
      if(loginResponse.status >= 404) {
        setMessage("L'utilisateur n'existe pas")
      } else {
        setMessage("Mot de passe ou Identifiant incorrect")
      }
      
      return setIsError(true);
    }
    setIsError(false);
    const loginResponseData = await loginResponse.json();
    const token = loginResponseData.data;

    if (token) {
      localStorage.setItem("jwt", token);
      
      setMessage("Vous êtes bien connecté");
      navigate("/user/");
    } else {
      setMessage("Erreur lors de la connexion");
    }
  };

    return (
          <main>
            <div>
              <Header />
              {isError && <p className="error">{message}</p>}
              {isSuccess && <p className="error">{message}</p>}
              <form onSubmit={handleLogin}>
                <h2>Identifiez-vous :</h2>
                <label>
                  Username : 
                  <input type="text" name="user_name" />
                </label>
                <label>
                  Password : 
                  <input type="password" name="password" />
                </label>
                <img src="" alt="Connexion" />
                <input type="submit" value="Connexion" />
              </form>
              <p>Mot de passe oublié ?</p>
            </div>
            <Footer />
          </main>
    )       
}

export default Connexion;