import { useEffect } from "react";
import { LOGOUT } from "../graphql/auth";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function Logout() {
  const navigate = useNavigate();
  const { data, loading } = useQuery(LOGOUT, {
    onError(error) {
      console.log(error);
    },
  });
  useEffect(() => {
    if (data?.logout?.success) {
      Cookies.remove("signedin");
      localStorage.removeItem("userLogged");
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
    }
  }, [data]);

  if (loading) return <div>Vous allez être déconnecté...</div>;
  if (data) {
    return (
      data.logout.success && (
        <div>
          vous avez été déconnecté, Vous allez être redirigés dans 3 secondes
        </div>
      )
    );
  }
}
export default Logout;
