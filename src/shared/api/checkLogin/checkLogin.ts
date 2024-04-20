import { AxiosError } from "axios";
import { ApiClient } from "@shared/api/Client";

export const checkLogin = async () => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `service-auth/employee/token/check`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JwtToken")}`,
      },
    });

    const { data, status } = response;
    if (status === 200) {
      localStorage.setItem('JwtToken', data.data.token)
      return { data, status };
    } else {
      console.error(`Ошибка при входе. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    console.error("Ошибка при входе:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
