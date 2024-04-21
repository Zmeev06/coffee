import Routing from "./index.vue"

export const routes = [
	{ path: "/login", component: () => import("./LoginPage"), name: "Login" },
	{
		path: "/personal_cabinet",
		component: () => import("./PersonalCabinetPage"),
		name: "lk"
	},
	{ path: "/admin_panel", component: () => import("./AdminPanelPage"), name: "Admin" }
	
]

export { Routing }
