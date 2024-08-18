import { restClient } from "../res-client";

interface LoginParams {
  email: string;
  password: string;
}

export const loginApi = async ({ email, password }: LoginParams) => {
  try {
    const response = await restClient({
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/auth/login`,
      method: "POST",
      data: {
        email,
        password,
      },
    });

    return response;
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Login API error:", error);

    // Handle the error (you might want to return a custom error message or re-throw it)
    throw new Error("Failed to login. Please check your credentials and try again.");
  }
};
