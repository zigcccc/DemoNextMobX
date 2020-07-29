module.exports = {
	extends: [
		'plugin:cypress/recommended',
		'eslint:recommended',
		'plugin:react/recommended',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	rules: {
		'no-console': 0,
		'import/prefer-default-export': 0,
		'quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'es5',
				singleQuote: true,
				printWidth: 80,
				endOfLine: 'lf',
				semi: true,
				tabWidth: 2,
			},
		],
	},
	plugins: ['react', 'prettier'],
};
