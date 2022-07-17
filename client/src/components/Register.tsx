import { useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/auth";
import { ChangeEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Register(props: any) {
  const navigate = useNavigate();
  const [register, { loading }] = useMutation(REGISTER, {
    onError: (error) => console.log(error),
    onCompleted(data) {
      if (data.register.success) {
        document.cookie = "signedin=true;path=/";
      }
      const { success, ...user } = data.register;
      localStorage.setItem("userLogged", JSON.stringify(user));
      navigate("/", { replace: true, state: { ...user } });//on transmet le user loggé pour la première navigation, pour pouvoir récupérer le username au niveau du App
    },
  });
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    register({
      variables: {
        registerUserInput: state,
      },
    });
  };
  return (
    <div>
      <h1>Register</h1>
      <input name="username" value={state.username} onChange={handleChange} />
      <input name="password" value={state.password} onChange={handleChange} />
      <button disabled={loading} onClick={handleSubmit}>
        S'inscrire
      </button>
      <Link to="/auth/login">Déjà inscrit(e)?</Link>
    </div>
  );
}

export default Register;