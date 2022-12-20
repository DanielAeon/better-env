"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV_DEFAULTS = void 0;
exports.ENV_DEFAULTS = {
    auth: {
        authUrl: "",
        clientId: "",
        audience: "",
        scope: [],
        redirectUrl: "",
    },
    database: {
        url: "",
    },
    app: {
        port: 8080,
        address: "0.0.0.0",
    },
    email: {
        usernameEmail: "",
        apiKeyEmail: "",
        domainEmail: "",
        toEmail: [""],
        senderEmail: "",
    },
    wse: {
        urlWse: "",
        apiKeyWse: "",
        returnUrlWse: "",
    },
    environment: {
        hideSwagger: false,
        name: "",
        color: "",
        dateFormat: "",
        longDateFormat: "",
        timeFormat: "",
        supportEmail: "",
        appInsightsConnection: "",
        enableAppInsightsLogging: false,
        enableLiveMetrics: false,
        enableConsoleLogCollection: false,
        uiUrl: "",
        systemUserId: "",
    },
};
