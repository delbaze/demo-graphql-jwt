//src/components/ProtectedArea.tsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
function ProtectedArea({ children }: any) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(Cookies.get("signedin"))
    if (!Cookies.get("signedin")) {
      navigate("/auth/login");
    }
  }, [navigate]);
  return children;
}

export default ProtectedArea;
