module.exports = api => {
	const isTest = api.env("test"); //jest

	return {
		presets: [
			[
				"babel-preset-packez",
				{
					modules: false,
					loose: true,
				},
			],
		],
	};
};
