import type { TSESLint } from "@typescript-eslint/experimental-utils";
import { ERROR } from "../util";

const config: TSESLint.Linter.Config = {
    env: { es6: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        "strict": ERROR,
    },
};

export = config;
