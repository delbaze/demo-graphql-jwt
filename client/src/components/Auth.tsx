import { Outlet } from "react-router-dom";
function Auth() {
  return (
    <div>
      <h1>Authentification</h1>
      <Outlet />
    </div>
  );
}

export default Auth;
