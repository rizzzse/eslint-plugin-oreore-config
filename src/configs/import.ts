import type { TSESLint } from "@typescript-eslint/experimental-utils";
import { WARN, always, never, warn } from "../util";

const config: TSESLint.Linter.Config = {
    extends: [
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:import/react",
    ],
    plugins: ["simple-import-sort"],
    settings: {
        "import/resolver": "typescript",
    },
    rules: {
        "sort-imports": warn({ ignoreDeclarationSort: true }),
        "simple-import-sort/exports": WARN,
        "import/no-absolute-path": WARN,
        "import/no-self-import": WARN,
        "import/no-cycle": warn({ maxDepth: 16, ignoreExternal: true }),
        "import/no-useless-path-segments": warn({ noUselessIndex: true, commonjs: true }),
        "import/no-extraneous-dependencies": WARN,
        "import/unambiguous": WARN,
        "import/first": WARN,
        "import/no-duplicates": WARN,
        "import/extensions": warn(always, {
            js: never,
            jsx: never,
            ts: never,
            tsx: never,
        }),
        "import/order": warn({
            groups: [["builtin", "external"], "internal", "parent", "sibling", "index"],
            pathGroups: [{ pattern: "~/**", group: "internal" }],
            alphabetize: { order: "asc" },
            ["newlines-between"]: never,
        }),
        "import/newline-after-import": WARN,
        "import/max-dependencies": warn({ max: 16 }),
        "import/no-named-default": WARN,
        "import/no-default-export": WARN,
    },
};

export = config;
