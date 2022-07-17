import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const [userLogged, setUserLogged] = useState(
    JSON.parse(localStorage.getItem("userLogged") || "{}") //récupération du user stocké dans le localStorage
  );
  useEffect(() => {
    if (Object(location.state).hasOwnProperty("username")) {
      setUserLogged(location.state);
    }
  }, [location.state]);//si lors d'une redirection, le state comporte les données du user, on le met en userLogged (on peut imaginer mettre tout ça dans un contexte)
  return (
    <div>
      <h1>Quête</h1>
      <Link to="/logout">Se déconnecter({userLogged.username})</Link>
      <Outlet />
    </div>
  );
}

export default App;