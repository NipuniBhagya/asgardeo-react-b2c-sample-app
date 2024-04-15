import "./style/Global.css";
import React, { Suspense } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthenticatedComponent, useAuthContext } from "@asgardeo/auth-react";
import { routes } from "./configs/routes-config";
import { AppConstants } from "./constants/app-constants";

function App() {
    const { state } = useAuthContext();

    return (
        <Router>
            <div className='App'>
                { state?.isAuthenticated && <Nav></Nav> }
                <Suspense fallback={ <div class='loader-container'><div class='loader'/></div> } >
                    <Routes>
                        <Route path={ AppConstants.getPaths().get("LOGIN") } element={ <Login /> } key={ -1 } />
                        {routes.map((route, index) => {
                            return (
                                <Route
                                    path={ route.path }
                                    element={
                                        <AuthenticatedComponent
                                            fallback={<Navigate to={AppConstants.getPaths().get("LOGIN")} />}
                                        >
                                            <route.component />
                                        </AuthenticatedComponent>
                                    }
                                    key={ index }
                                    exact={true}
                                />
                            );
                        })}
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
