"use client";

import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirectTo = searchParams.get("redirectTo");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include",
      });
      const responseData = await response.json();
      const { loggedin, token } = responseData.data;
      if (loggedin === 1) {
        localStorage.setItem("isLoggedIn", "true");
        if (redirectTo) {
          router.push(redirectTo);
        } else {
          router.push("/");
        }
      }
    } catch (error) {}
  };
  return (
    <Grid>
      <Grid className="flex !flex-col gap-4 w-1/3 items-center  m-auto mt-32">
        <p className="text-2xl font-bold text-gray-600">Login</p>

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Grid>
          <Button
            variant="contained"
            disabled={!email || !password}
            onClick={handleLogin}
          >
            Login
          </Button>
          <p
            className="text-blue-800 text-sm text-center mt-2 underline cursor-pointer"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Signup
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
