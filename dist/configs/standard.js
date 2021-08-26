"use strict";
const config = {
    extends: [
        "./configs/import",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    overrides: [
        { files: ["!src/**"], env: { node: true } },
    ],
};
module.exports = config;
