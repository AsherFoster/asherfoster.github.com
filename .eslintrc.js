// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@unicefnz/eslint-config/patch');

module.exports = {
  extends: [
    '@unicefnz'
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      aspects: ['invalidHref']
    }]
  },
  settings: {
    react: {
      linkComponents: [
        { name: 'Link' }
      ]
    }
  },
  parserOptions: { tsconfigRootDir: __dirname }
};
