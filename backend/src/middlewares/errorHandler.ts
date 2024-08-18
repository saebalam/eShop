import { Request, Response, NextFunction } from "express";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { AuthenticationError } from "../errors/authentication-error";
import { MalformedRequestFormat } from "../errors/malformedRequestFormat";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("eee", err.toString());

  if (err instanceof DatabaseConnectionError) {
    res.status(err?.statusCode || 500).send({
      error: {
        success: false,
        message: err.message || "Something went wrong",
      },
    });
  }

  if (err instanceof AuthenticationError) {
    res.status(err.statusCode || 401).send({
      error: {
        message: err.message,
      },
    });
  }

  if (err instanceof MalformedRequestFormat) {
    console.log('reaching')
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
    return
  }

  res.status(500).send({
    error: {
      message: "Something went wrong",
    },
  });
};
