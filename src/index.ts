import type { TSESLint } from "@typescript-eslint/experimental-utils";

const configs: Record<string, TSESLint.Linter.Config> = {
    base: { extends: "./configs/base" },
    import: { extends: "./configs/import" },
    standard: { extends: "./configs/standard" },
};

export = { configs };
