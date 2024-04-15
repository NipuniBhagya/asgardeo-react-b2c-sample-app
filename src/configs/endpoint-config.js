const asgardeoBaseUrl = process.env.REACT_APP_ASGARDEO_BASE_URL;

const endpointConfig = {
    api: {
        endpoints: {
            me: `${asgardeoBaseUrl}/scim2/Me`,
            externalApi:
                "https://bdc81b0c-bae6-43e8-b4aa-0702a82aee77-prod.e1-us-east-azure.choreoapis.dev/asgardeo-b2c-demo/accounts-management-api/endpoint-9090-803/v1.0/accounts",
        },
    },
};

export default endpointConfig;
