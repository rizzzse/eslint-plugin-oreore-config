"use strict";
const util_1 = require("../util");
const config = {
    env: { es6: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        "strict": util_1.ERROR,
    },
};
module.exports = config;
