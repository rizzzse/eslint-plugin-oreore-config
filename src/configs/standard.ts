import type { TSESLint } from "@typescript-eslint/experimental-utils";

const config: TSESLint.Linter.Config = {
    extends: [
        "./configs/import",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    overrides: [
        { files: ["!src/**"], env: { node: true } },
    ],
};

export = config;
