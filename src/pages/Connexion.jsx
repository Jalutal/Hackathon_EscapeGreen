import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Connexion = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const user_name = event.target.user_name.value;
    const password = event.target.password.value;
    const loginData = {
      user_name,
      password,
    };
    const loginDataJson = JSON.stringify(loginData);
    const loginResponse = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: loginDataJson,
    });
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
              {message && <p>{message}</p>}
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