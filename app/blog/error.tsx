"use client";

const ErrorWrapper = ({ error }: { error: Error }) => {
  return <h1 style={{ color: "red" }}>Oops...{error.message}</h1>;
};

export default ErrorWrapper;
