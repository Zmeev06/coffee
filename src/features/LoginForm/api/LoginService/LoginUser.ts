import { AxiosError } from "axios";
import { ApiClient } from "@shared/api/Client";
import { message } from "ant-design-vue";

export const loginUser = async (
  username: string,
  password: string,
  // remember: boolean
) => {
  const loginData = {
    username,
    password,
    // remember: remember ? 1 : 0
  };

  try {
    const response = await ApiClient({
      data: loginData,
      method: "POST",
      url: "service-auth/sing-in/hash/generate",
    });

    const { data, status } = response;
    if (status === 200) {
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
