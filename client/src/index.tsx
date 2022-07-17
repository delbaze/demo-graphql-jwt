import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Register from "./components/Register"
import ProtectedArea from "./components/ProtectedArea";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Logout from "./components/Logout";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache({
    addTypename: false, //permet d'éviter d'avoir __typename dans nos retours
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <ProtectedArea>
                <Home />
              </ProtectedArea>
            }
          />
          <Route path="accueil" element={<Home />} />
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
        <Route path="logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
</React.StrictMode>
);

reportWebVitals();
