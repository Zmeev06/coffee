import { AxiosError } from "axios";
import { ApiClient } from "@shared/api/Client";
import { message } from "ant-design-vue";

export const loginUser = async (
  email: string,
  password: string,
) => {
  const loginData = {
    email,
    password,
  };

  try {
    const response = await ApiClient({
      data: loginData,
      method: "POST",
      url: "service-auth/sign-in",
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
