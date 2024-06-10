"use client";

import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:3002/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        credentials: "include",
      });
      const responseData = await response.json();
      if (responseData?.data?.loggedin == 1) {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/");
      }
      console.log(response);
    } catch (error) {}
  };
  return (
    <Grid>
      <Grid className="flex !flex-col gap-4 w-1/3 items-center m-auto mt-32">
        <p className="text-2xl font-bold text-gray-600">Sign up</p>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          type="username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          fullWidth
          id="confirm-password"
          name="confirm-password"
          label="Confirm Password"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Grid>
          <Button
            variant="contained"
            disabled={
              !username ||
              !email ||
              !password ||
              !confirmPassword ||
              !(password === confirmPassword)
            }
            onClick={() => {
              handleSignup();
            }}
          >
            Signup
          </Button>
          <p
            className="text-blue-800 text-sm text-center mt-2 underline cursor-pointer"
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
