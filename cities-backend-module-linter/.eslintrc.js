module.exports = {
    "env": {
        "node": "true"
    },
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "no-extra-semi": "error",
        "no-unused-vars": "warn",
        "no-console": "off"
    }
};
