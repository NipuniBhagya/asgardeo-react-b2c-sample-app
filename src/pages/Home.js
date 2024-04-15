import USER_LOGO from "../images/user.png";
import { useAuthContext } from "@asgardeo/auth-react";
import Cards from "../components/Cards";

/**
 * Home page for the Sample.
 *
 * @param props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
const Home = () => {
    const { state } = useAuthContext();

    return (
        <>
            <header className='App-header-section App-header-length'>
                <div>
                    <div className='avatar-large'>
                        <img alt='react-logo' src={USER_LOGO} className='link-logo-image' />
                    </div>
                    <h1>
                        Hello <b>{state?.displayName ?? state?.username}</b>
                    </h1>
                    <h4>Welcome to the React + Asgardeo demonstration app!</h4>
                    <p className='p-description justified-text max-width'>
                        From here on you can experience the basic business application use cases integrated with
                        Asgardeo for user profile management and other capabilities.
                    </p>
                </div>
            </header>
            <h3>What can you do next?</h3>
            <Cards />
        </>
    );
};

export default Home;
