module.exports = {
	env: {
		node: true,
	},
	extends: ['airbnb-base', 'airbnb-typescript/base'],
	rules: {
		'max-len': [1, { code: 140 }],
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	parserOptions: {
		project: './tsconfig.json',
	},
};
