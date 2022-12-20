"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = exports.readFileAsync = exports.CONFIG = void 0;
const fs = __importStar(require("fs"));
const config_1 = require("./config");
const readFileAsync = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fs.promises.readFile(filename);
    const dataJson = JSON.parse(data.toString());
    // const fileData = dataJson as AppConfig;
    return dataJson;
});
exports.readFileAsync = readFileAsync;
const loadConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const nodeEnvironment = ((_b = (_a = process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || "";
    const isDevelopment = nodeEnvironment.startsWith("development");
    const publicPath = isDevelopment ? "src" : "./dist";
    const jsonFileUrl = isDevelopment ? `${publicPath}/config/env.local.json` : `${publicPath}/config/env.json`;
    const jsonConfig = yield (0, exports.readFileAsync)(jsonFileUrl);
    exports.CONFIG = Object.freeze((() => {
        const config = Object.assign({}, jsonConfig, config_1.ENV_DEFAULTS);
        return config;
    })());
    return exports.CONFIG;
});
exports.loadConfig = loadConfig;
