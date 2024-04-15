import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ASGARDEO_LOGO from "../images/asgardeo-logo-transparent.png";
import GITHUB_LOGO from "../images/github.png";
import REACT_LOGO from "../images/react-logo.png";
import { useAuthContext } from "@asgardeo/auth-react";
import { AppConstants } from "../constants/app-constants";

/**
 * Home page for the Sample.
 *
 * @param props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
const Login = () => {
    const { state, signIn } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (state?.isAuthenticated) {
            navigate(AppConstants.getPaths().get("HOME"), { replace: true });
        }
    }, [ state ]);

    const signUpURL = `${process.env.REACT_APP_SIGN_UP_URL}${process.env.REACT_APP_CLIENT_ID} &sp=${process.env.REACT_APP_APPLICATION_NAME} &redirect_url=${process.env.REACT_APP_CLIENT_BASE_URL}`;

    return (
        <header className='App-header-section'>
            <div>
                <div className='container'>
                    <div className='logo-container'>
                        <img alt='react-logo' src={REACT_LOGO} className='react-logo-image logo' />
                    </div>
                </div>
                <div className='logo-container'>
                    <h1>
                        Enhance your application’s IAM experience with
                        <img alt='react-logo' src={ASGARDEO_LOGO} className='asgardeo-logo-image' />
                    </h1>
                </div>
                <p className='p-description justified-text'>
                    This sample demonstrates the authentication flow of a React application using Asgardeo.
                </p>
                <div className='button-container'>
                    <button className='btn' onClick={() => signIn()}>
                        Sign In
                    </button>
                    <a href={signUpURL}>
                        <button className='btn-outline large-button'>Create an account</button>
                    </a>
                </div>
                <div className='container-column'>
                    <a href='https://github.com/dasuni-30/asgardeo-react-sample-app'>
                        <img alt='react-logo' src={GITHUB_LOGO} className='github-logo-image-small' />
                    </a>
                    <a href='https://github.com/dasuni-30/asgardeo-react-sample-app'>Explore the source code</a>
                </div>
            </div>
        </header>
    );
};

export default Login;
