export class InternalServerError extends Error {
  constructor(message = "Internal server error") {
    super(message);
  }
}
// throw new Error({ httpCode: 500, msg: message || "something went wrong" });

export class AuthenticationError extends Error {
  constructor(message = "Authentication failed") {
    super(message);
  }
}
