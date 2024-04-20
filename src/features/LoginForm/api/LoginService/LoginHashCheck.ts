import { AxiosError } from "axios";
import { ApiClient } from "@shared/api/Client";
import { message } from "ant-design-vue";

export const loginHashCheck = async (
  username: string,
  hash: string,
  remember: boolean,
) => {
  const loginData = {
    username,
    hash,
    remember: remember ? 1 : 0,
  };

  try {
    const response = await ApiClient({
      data: loginData,
      method: "POST",
      url: "service-auth/sing-in/hash/check",
    });

    const { data, status } = response;
    if (status === 200) {
      const jwt = data.data.token;

      localStorage.setItem("JwtToken", jwt);
      return { data, status };
    } else {
      console.error(`Ошибка при входе. Статус: ${status}`);
      message.error("Ошибка при входе.");
      return { data: null, status };
    }
  } catch (error) {
    console.error("Ошибка при входе:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
