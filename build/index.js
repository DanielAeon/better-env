"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loader_1 = require("./loader");
const betterEnv = () => {
    return (0, loader_1.loadConfig)();
};
module.exports = betterEnv;
