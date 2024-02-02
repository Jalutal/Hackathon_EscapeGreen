import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getCookieData } from "./cookies";

// je créé une fonction réutilisable,
// qui au chargement du composant,
// récupère le token en local storage
// s'il n'existe, ça redirige vers la page de login
// vu que ma fonction utilise des "hook" de react
// (des fonctions que react me fournies qui marchent
// que dans des composants, comme useState, useEffect, useNavigate
// qui commencent par "use")
// mon nom de fonction doit aussi commencer par use
// => ma fonction est devenue un hook

export const useVerifyIfUserIsLogged = () => {

  const navigate = useNavigate();

  useEffect(() => {
    // const token = localStorage.getItem("jwt"); // initial ver
    const token = getCookieData("jwt")

    if (!token) {
      navigate("/login");
    }
  });
};

export const useVerifyIfAdminIsLogged = () => {
  const navigate = useNavigate();
  const token = getCookieData("jwt")
  useEffect(() => {
    if (token !== null) {
    const decodedToken = jwtDecode(token);
    console.log("Decoded Token:", decodedToken);
    console.log("Role:", decodedToken.roles);

    if (!token || decodedToken.roles !== 'admin') {
      navigate("/login");
    }
  } else {
    navigate("/login")
  }
  });
};