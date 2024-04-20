import { createApp } from "vue";
import { router, store } from "./providers";
import App from "./index.vue";
import Antd from "ant-design-vue";
import GoogleSignInPlugin from "vue3-google-signin";

const initializeApp = createApp(App).use(router).use(store).use(Antd).use(GoogleSignInPlugin, {
    clientId: '180148062485-bm9fbp3s7c13adfhe3fs5ugbjatr6e0k.apps.googleusercontent.com',
  });;

export const app = initializeApp;
