module.exports = {
	collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
	coverageReporters: ["json", "lcov", "text-summary", "clover"],
	coverageThreshold: { global: { statements: 95, branches: 95, lines: 95, functions: 95 } },
};
