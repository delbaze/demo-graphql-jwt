import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "../graphql/auth";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [login] = useLazyQuery(LOGIN);
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    login({
      variables: {
        loginUserInput: state,
      },
      onCompleted(data) {
        console.log(data);
        if (data.login.success) {
          document.cookie = "signedin=true";
          const { success, ...user } = data.login;
          localStorage.setItem("userLogged", JSON.stringify(user));
          navigate("/", { replace: true, state: { ...user } });//on transmet le user loggé pour la première navigation, pour pouvoir récupérer le username au niveau du App
        }
      },
      onError(error) {
        console.log(error);
      },
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <input name="username" value={state.username} onChange={handleChange} />
      <input name="password" value={state.password} onChange={handleChange} />
      <button onClick={handleSubmit}>Se Connecter</button>
      <Link to="/auth/register">S'inscrire</Link>
    </div>
  );
}

export default Login;
