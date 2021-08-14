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
  return(
    <span>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>Loading</h1>{" "}
      <ClipLoader color="ffffff" loading="ffffff" css={override} size={200} />
    </span>
  );
};

export default LoadingModule;
