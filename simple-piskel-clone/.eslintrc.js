module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prefer-destructuring": ["error", { "object": false, "array": false }],
    "linebreak-style": "off",
    "no-unused-vars": ["error", { vars: "local", args: "none" }],
    "no-await-in-loop": "warn",
    "function-paren-newline": "warn",
    "no-unused-expressions": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "comma-dangle": ["error", "always-multiline"],
    "arrow-body-style": "off",
    "no-shadow": "off",
    "object-curly-newline": "off",
    "global-require": "warn",
    "func-names": "off",
    "no-underscore-dangle": "off",
    "max-len": "off",
    "no-bitwise": "off",
    "no-param-reassign": ["warn", { "props": false }],
    "padded-blocks": "off",
    "no-use-before-define": "off",
    "no-unused-vars": "warn",
    "import/no-extraneous-dependencies": "off",
    "no-plusplus": "off",
    "consistent-return": "off",
    "no-console": "off",
    "no-restricted-syntax": ["error", "DebuggerStatement", "ForInStatement", "LabeledStatement", "WithStatement"],
    "dot-notation": "off",
    "class-methods-use-this": "off",
    "no-case-declarations": "off",
    "valid-typeof": "off"
  },
};
