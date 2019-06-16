module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', '@vue/airbnb'],
	rules: {
		'linebreak-style': 0,
		'indent': ['error', 'tab'],
		'no-tabs': 0,
		'max-len': [1, 160],
		'comma-dangle': [2, 'never'],
		'object-curly-newline': 0,
		'no-new': 0
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
};