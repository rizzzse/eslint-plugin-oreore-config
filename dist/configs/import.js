"use strict";
const util_1 = require("../util");
const config = {
    extends: [
        "./base",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:import/react",
    ],
    plugins: ["simple-import-sort"],
    settings: {
        "import/resolver": "typescript",
    },
    rules: {
        "sort-imports": util_1.warn({ ignoreDeclarationSort: true }),
        "simple-import-sort/exports": util_1.WARN,
        "import/no-absolute-path": util_1.WARN,
        "import/no-self-import": util_1.WARN,
        "import/no-cycle": util_1.warn({ maxDepth: 16, ignoreExternal: true }),
        "import/no-useless-path-segments": util_1.warn({ noUselessIndex: true, commonjs: true }),
        "import/no-extraneous-dependencies": util_1.WARN,
        "import/unambiguous": util_1.WARN,
        "import/first": util_1.WARN,
        "import/no-duplicates": util_1.WARN,
        "import/extensions": util_1.warn(util_1.always, {
            js: util_1.never,
            jsx: util_1.never,
            ts: util_1.never,
            tsx: util_1.never,
        }),
        "import/order": util_1.warn({
            groups: [["builtin", "external"], "internal", "parent", "sibling", "index"],
            pathGroups: [{ pattern: "~/**", group: "internal" }],
            alphabetize: { order: "asc" },
            ["newlines-between"]: util_1.never,
        }),
        "import/newline-after-import": util_1.WARN,
        "import/max-dependencies": util_1.warn({ max: 16 }),
        "import/no-named-default": util_1.WARN,
        "import/no-default-export": util_1.WARN,
    },
};
module.exports = config;
