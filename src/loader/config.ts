export interface AppConfig {
  auth: {
    authUrl: string;
    clientId: string;
    audience: string;
    scope: Array<string>;
    redirectUrl: string;
  };
  database: {
    url: string;
  };
  app: {
    port: number;
    address: string;
  };
  email: {
    usernameEmail: string;
    apiKeyEmail: string;
    domainEmail: string;
    toEmail: string[];
    senderEmail: string;
  };
  wse: {
    urlWse: string;
    apiKeyWse: string;
    returnUrlWse: string;
  };
  environment: {
    hideSwagger: boolean;
    name: string;
    color: string;
    dateFormat: string;
    longDateFormat: string;
    timeFormat: string;
    supportEmail: string;
    appInsightsConnection: string;
    enableAppInsightsLogging: boolean;
    enableLiveMetrics: boolean;
    enableConsoleLogCollection: boolean;
    uiUrl: string;
    systemUserId: string;
  };
}

export const ENV_DEFAULTS = {
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
