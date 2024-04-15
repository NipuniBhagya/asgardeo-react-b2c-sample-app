import React, { useState } from "react";
import { getExternalApi } from "../api/external-api";
import endpointConfig from "../configs/endpoint-config";

/**
 * API Call component.
 */
const APICall = () => {
    // State to store the external API response.
    const [externalApiResponse, setExternalApiResponse] = useState();
    const [isExternalApiRequestLoading, setIsExternalApiRequestLoading] = useState(false);

    // Invoke the external API.
    const handleApiCall = () => {

        // Set the loading state.
        setIsExternalApiRequestLoading(true);

        getExternalApi()
            .then((response) => {
                setExternalApiResponse(response);
            })
            .catch((error) => {
                // Log the error.
                console.error("Failed to fetch external API.");
            })
            .finally(() => {
                setIsExternalApiRequestLoading(false);
            });
    };

    return (
        <div className='api-documentation'>
            <div className='api-path'>
                <div className='method-label'>GET</div>
                <div className='path-label'>/accounts</div>
            </div>
            <hr />
            <div className='api-request'>
                <h3>Request</h3>
                <pre>
                    <table>
                        <tr>
                            <td><strong>Endpoint:</strong></td>
                            <td>{ endpointConfig.api.endpoints.externalApi }</td>
                        </tr>
                        <tr>
                            <td><strong>Headers:</strong></td>
                            <td>
                                "Accept": "application/json",
                                "Content-Type": "application/json"
                            </td>
                        </tr>
                    </table>
                </pre>
            </div>
            <hr />
            <div className='api-response-container'>
                <h3>Response</h3>
                {
                    externalApiResponse ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>200</td>
                                    <td>
                                        <div>
                                            <div>Ok</div>
                                            <div className="clear-btn">
                                                <button onClick={ () => setExternalApiResponse(undefined) }>
                                                    <strong>Clear Response</strong>
                                                </button>
                                            </div>   
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <pre className='api-response' id='contentToCopy'>
                                            { JSON.stringify(externalApiResponse, null, 2) }
                                        </pre>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ) : (
                        <pre className='api-response'>
                            {
                                isExternalApiRequestLoading ? (
                                    "Loading..."
                                ) : (
                                    "[ ]"
                                )
                            }
                        </pre>
                    )
                }
                <div className='response-details'></div>
            </div>
            {
                isExternalApiRequestLoading || !externalApiResponse ? (
                    <div className="try-it-out">
                        <button onClick={ handleApiCall }>
                            Invoke API
                        </button>
                    </div>
                ) : null
            }
        </div>
    );
};

export default APICall;
