import { useState } from "react";
import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

const LoadingModule = () => {
  return (
    <span>
      <h1
        style={{
          fontSize: "50px",
          textAlign: "center",
          marginBottom: "100px",
          marginTop: "50px",
        }}
      >
        Loading
      </h1>{" "}
      <ClipLoader color="ffffff" loading="ffffff" css={override} size={180} />
    </span>
  );
};

export default LoadingModule;
