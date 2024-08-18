"use client";

import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { login } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { loginApi } from "../../networking/auth/loginApi";
import { setError } from "../../redux/errorSlice";
import ErrorPopup from "../components/error";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirectTo = searchParams.get("redirectTo");

  const handleLogin = async () => {
    try {
      const response = await loginApi({ email, password });

      console.log("rrr", response);
      dispatch(login());

      if (redirectTo) {
        router.push(redirectTo);
      } else {
        router.push("/");
      }
    } catch (error) {
      // console.log("rrrr", error?.response?.data?.error?.message);
      // dispatch(setError(error?.response?.data?.error?.message));
    }
  };
  return (
    <Grid>
      <ErrorPopup />
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
