import { AsgardeoSPAClient } from "@asgardeo/auth-react";
import endpointConfig from "../configs/endpoint-config";

// Initialize the AsgardeoSPAClient.
const auth = AsgardeoSPAClient.getInstance();

/**
 * Get the external API.
 * 
 * @returns { Promise<any> } A promise containing the external API response.
 */
export async function getExternalApi() {
    const requestConfig = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "GET",
        url: `${ endpointConfig.api.endpoints.externalApi }`,
    };

    try {
        const response = await auth.httpRequest(requestConfig);
        
        return response.data;
    } catch (error) {
        // Log the error.
        console.error("Failed to fetch external API.", error);
    }
}
