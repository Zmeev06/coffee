import { createApp } from "vue";
import { router, store } from "./providers";
import App from "./index.vue";
import Antd from "ant-design-vue";

const initializeApp = createApp(App).use(router).use(store).use(Antd);

export const app = initializeApp;
