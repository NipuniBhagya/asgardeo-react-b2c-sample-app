import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AuthProvider
        config={{
            signInRedirectURL: `${process.env.REACT_APP_BASE_URL}`,
            signOutRedirectURL: `${process.env.REACT_APP_BASE_URL}`,
            clientID: `${process.env.REACT_APP_CLIENT_ID}`,
            baseUrl: `${process.env.REACT_APP_ASGARDEO_BASE_URL}`,
            resourceServerURLs: [
                "https://bdc81b0c-bae6-43e8-b4aa-0702a82aee77-prod.e1-us-east-azure.choreoapis.dev/asgardeo-b2c-demo/accounts-management-api/endpoint-9090-803/v1.0",
            ],
            scope: ["openid", "profile", "internal_login", "internal_user_mgt_view", "app_roles"],
        }}
        fallback={ <div class='loader-container'><div class='loader'/></div> }
    >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
