module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:flowtype/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'flowtype',
    ],
    rules: {
        indent: ['error', 4],
        'import/prefer-default-export': 0,
        'global-require': 0,
        'react/jsx-indent': ['error', 4],
        'no-underscore-dangle': 0,
        'max-len': ['error', 200],
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
};
