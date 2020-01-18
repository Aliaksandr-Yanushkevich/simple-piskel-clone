module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "import/no-named-as-default": 0,
    //   "import/no-unassigned-import": 0
    }
};
