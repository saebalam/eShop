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

  const handleSignup = () => {
    try {
      const response = fetch("http://localhost:3002/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
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
          id="username"
          name="username"
          label="username"
          type="username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="email"
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
            className="text-blue-800 text-sm text-center underline cursor-pointer"
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
