class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong XO",
    errors = [],
    stack = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.errors = errors;

    if (!stack) {
      this.stack = Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = stack;
    }
  }
}

export default ApiError;
