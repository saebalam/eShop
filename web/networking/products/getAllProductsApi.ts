import { restClient } from "../res-client";

export const getAllProductsApi = async () => {
  try {
    const response = await restClient({
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products/getAllProducts`,
      method: "GET",
    });

    return response;
  } catch (error) {
    throw error;
  }
};
