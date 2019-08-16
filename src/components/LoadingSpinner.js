import React from "react";
import { css } from "@emotion/core";
import { PacmanLoader } from "react-spinners";
const override = css`
  display: block;
  margin: 0 auto;
  transform: translateX(-25px);
`;
const LoadingSpinner = ({ loading }) => {
  return (
    <div
      className="sweet-loading"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      <PacmanLoader
        css={override}
        sizeUnit={"px"}
        size={50}
        color={"#e1b12c"}
        loading={loading}
      />
    </div>
  );
};

export default LoadingSpinner;
