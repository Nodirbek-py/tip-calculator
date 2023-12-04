module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "react-hooks", "@typescript-eslint", "prettier"],
    rules: {
        "react/react-in-jsx-scope": "off",
        camelcase: "error",
        "spaced-comment": "error",
        quotes: ["warn", "double"],
        "no-duplicate-imports": "error",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "@typescript-eslint/no-explicit-any": "warn",
    },
    settings: {
        "import/resolver": {
            typescript: {},
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
};
