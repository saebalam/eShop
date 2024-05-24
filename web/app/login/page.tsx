"use client";

import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    try {
      const response = fetch("http://localhost:3002/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log(response);
    } catch (error) {}
  };
  return (
    <Grid>
      <Grid className="flex !flex-col gap-4 w-1/3 items-center  m-auto mt-32">
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
            className="text-blue-800 text-sm text-center underline cursor-pointer"
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
