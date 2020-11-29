module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    globals: {
        Srripe: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",

    },
    extends: [
        'airbnb-base',
        'eslint:recommended'
    ],
    plugins: [],
    rules: {
        'array-bracket-newline':[
            'error',
            {minItems: 2},
        ],
        'array-element-newline':[
            'error',
            {minItems: 2},
        ],
        'arrow-body-style': 'error',

    },
    overrides: [{
        files: ['**/*.spec.ts'],
        env:{
            jest: true,
        },
    }],
}
