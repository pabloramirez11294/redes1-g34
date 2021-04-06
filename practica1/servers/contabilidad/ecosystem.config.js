module.exports = {
	apps: [
		{
			name: "Sitio1",
			script: "npm",
			args: "start",
			watch: false,
			instances: 1,
			exec_mode: "cluster"
		}
	]
}
