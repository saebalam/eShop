import axios from "axios";

interface RestClientInput {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: any;
  data?: any;
  queryParams?: any;
}

export const restClient = async ({
  url,
  method,
  headers,
  data,
  queryParams,
}: RestClientInput) => {
  try {
    const response = await axios(url, {
      method: method,
      headers: headers,
      data,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error
  }
};
