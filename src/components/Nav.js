import React, { useEffect, useState } from "react";
import ASGARDEO_LOGO from "../images/asgardeo-logo-transparent.png";
import USER_LOGO from "../images/user.png";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";
import { AppConstants } from "../constants/app-constants";

/**
 * Nav bar component.
 */
const Nav = () => {
    const { state, signOut, getDecodedIDToken } = useAuthContext();
    const [isResourcesAllowed, setIsResourcesAllowed] = useState();

    const navigate = useNavigate();

    // Filter the display of API Call section based on the application role.
    useEffect(() => {
        getDecodedIDToken()
            .then((decodedIdToken) => {
                if (decodedIdToken?.application_roles === "React-App-Manager") {
                    setIsResourcesAllowed(true);
                }
            })
            .catch((error) => {});
    }, [getDecodedIDToken, state]);

    // Add active class to the current button.
    useEffect(() => {
        addActive();
    }, [ isResourcesAllowed ]);

    // Add active class to the current button.
    useEffect(() => {
        const currentUrl = window.location.href;
        const currentTabName = currentUrl.split("/")[3].replace("#", "");
        const resourceTab = document.getElementById("resources");
        const settingsTab = document.getElementById("setting");
        const homeTab = document.getElementById("home");
        const profileTab = document.getElementById("profile");

        var currentTab = homeTab;

        if (currentTabName === "resources") {
            currentTab = resourceTab;
            removeActiveTab(homeTab);
            removeActiveTab(settingsTab);
        } else if (currentTabName === "settings") {
            currentTab = settingsTab;
            removeActiveTab(homeTab);
            removeActiveTab(resourceTab);
        } else if (currentTabName === "") {
            currentTab = homeTab;
            removeActiveTab(resourceTab);
            removeActiveTab(settingsTab);
        } else if (currentTabName === "profile") {
            currentTab = profileTab;
            removeActiveTab(homeTab);
            removeActiveTab(resourceTab);
            removeActiveTab(settingsTab);
        } else {
            currentTab = homeTab;
            removeActiveTab(resourceTab);
            removeActiveTab(settingsTab);
        }

        if (
            currentTab !== undefined &&
            !(currentTab === null) &&
            !currentTab.className.includes("active") &&
            currentTab !== profileTab
        ) {
            currentTab.className += " active";
        }
    }, [isResourcesAllowed]);

    // Remove active class from all buttons.
    function removeActiveTab(tab) {
        if (tab != null && tab.className.includes("active")) {
            tab.className = tab.className.replace(" active", "");
        }
    }

    // Add active class to the current button.
    const addActive = () => {
        // Get the current tab from the route.
        const currentUrl = window.location.href;
        const currentTabName = currentUrl.split("/")[3].replace("#", "");

        var resourceTab = document.getElementById("resources");
        var settingsTab = document.getElementById("setting");
        var homeTab = document.getElementById("home");
        var profileTab = document.getElementById("profile");
        var currentTab;

        if (currentTabName === "resources") {
            currentTab = resourceTab;
            removeActiveTab(homeTab);
            removeActiveTab(settingsTab);
        } else if (currentTabName === "settings") {
            currentTab = settingsTab;
            removeActiveTab(homeTab);
            removeActiveTab(resourceTab);
        } else if (currentTabName === "") {
            currentTab = homeTab;
            removeActiveTab(resourceTab);
            removeActiveTab(settingsTab);
        } else if (currentTabName === "profile") {
            currentTab = profileTab;
            removeActiveTab(homeTab);
            removeActiveTab(resourceTab);
            removeActiveTab(settingsTab);
        } else {
            currentTab = homeTab;
            removeActiveTab(resourceTab);
            removeActiveTab(settingsTab);
        }
        if (
            currentTab !== undefined &&
            !(currentTab === null) &&
            !currentTab.className.includes("active") &&
            currentTab !== profileTab
        ) {
            currentTab.className += " active";
        }
    };

    return (
        <div className='navbar-section'>
            <div className='navbar'>
                <div className='left-panel'>
                    <div onClick={() => navigate(AppConstants.getPaths().get("HOME"))}>
                        <img alt='react-logo' src={ASGARDEO_LOGO} className='asgardeo-logo-image-small' />
                    </div>
                </div>
                <div className='center-panel' id='center-panel'>
                    <a href='/home' className='nav active' id='home'>
                        Home
                    </a>
                    <a href='/resources' className='nav' id='resources'>
                        API Call
                    </a>
                    {isResourcesAllowed && (
                        <a href='/settings' className='nav' id='setting'>
                            Settings
                        </a>
                    )}
                </div>
                <div className='right-panel'>
                    <a href='/profile'>{state?.displayName ?? state?.username}</a>
                    <div className='avatar-dropdown'>
                        <div className='avatar'>
                            <img alt='react-logo' src={USER_LOGO} className='link-logo-image-small logo' />
                            <span className='arrow small'>&#9660;</span>
                        </div>
                        <ul className='dropdown-menu'>
                            <li>
                                <a href='/profile' className='nav' id='profile'>
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a href='/' onClick={() => signOut()}>
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
