const baseRules = require("./rules/base");
const reactRules = require("./rules/react");

const configs = [
	"airbnb",
	// Disable rules which might conflict with Prettier
	"prettier",
	"prettier/react",
];

const plugins = ["simple-import-sort"];

module.exports = {
	extends: configs,
	plugins,
	rules: {
		...baseRules,
		...reactRules,
	},
};
