import * as fs from "fs";
import { AppConfig, ENV_DEFAULTS } from "./config";

/* eslint-disable */
export let CONFIG: AppConfig;

export const readFileAsync = async (filename: string): Promise<AppConfig> => {
  const data = await fs.promises.readFile(filename);

  const dataJson = JSON.parse(data.toString());
  // const fileData = dataJson as AppConfig;

  return dataJson;
};

export const loadConfig = async () => {
  const nodeEnvironment = process.env?.NODE_ENV?.toLowerCase() || "";
  const isDevelopment = nodeEnvironment.startsWith("development");

  const publicPath = isDevelopment ? "src" : "./dist";

  const jsonFileUrl = isDevelopment ? `${publicPath}/config/env.local.json` : `${publicPath}/config/env.json`;

  const jsonConfig = await readFileAsync(jsonFileUrl);

  CONFIG = Object.freeze(
    ((): AppConfig => {
      const config = Object.assign({}, jsonConfig, ENV_DEFAULTS);
      return config as AppConfig;
    })()
  );

  return CONFIG;
};
