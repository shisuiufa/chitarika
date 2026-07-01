import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-restricted-imports": "off",

      "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/*/*"],
              message:
                "Do not import from feature internals. Use the feature public API instead.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/shared/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@/app",
                "@/app/*",
                "@/pages",
                "@/pages/*",
                "@/features",
                "@/features/*",
                "@/features/*/*",
              ],
              message: "Shared layer must not import app, pages, or features.",
            },
            {
              regex: "^(\\.\\./)+(app|pages|features|templates)(/|$)",
              message:
                "Shared layer must not import app, pages, features, or templates via relative paths.",
            },
          ],
        },
      ],
    },
  },

  {
    files: ["src/features/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@/app",
                "@/app/*",
                "@/pages",
                "@/pages/*",
                "@/templates",
                "@/templates/*",
              ],
              message:
                "Features must not import app, pages, templates, or layouts.",
            },
            {
              group: ["@/features/*/*"],
              message:
                "Do not import from feature internals. Use the feature public API instead.",
            },
            {
              regex: "^(\\.\\./)+(app|pages|templates)(/|$)",
              message:
                "Features must not import app, pages, templates, or layouts via relative paths.",
            },
          ],
        },
      ],
    },
  },

  {
    files: ["src/pages/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/app", "@/app/*", "@/templates", "@/templates/*"],
              message: "Pages must not import app or templates layer.",
            },
            {
              group: ["@/features/*/*"],
              message:
                "Do not import from feature internals. Use the feature public API instead.",
            },
          ],
        },
      ],
    },
  },
]);
