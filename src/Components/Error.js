import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="">
      <h1>{error.statusText}!!!!</h1>
      <h2>{error.status}!!!</h2>
    </div>
  );
};

export default Error;
