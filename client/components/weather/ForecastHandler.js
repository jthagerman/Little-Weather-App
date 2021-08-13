import React from "react";
import Hourly from "./Hourly";
import Daily from "./Daily";
import PageNotFound from "../PageNotFound";

const ForecastHandler = (props) => {
  let location = props.location.pathname;
  const index = location.lastIndexOf("/");
  const query = location.substring(index + 1);

  if (query === "hourly") {
    return <Hourly />;
  } else if (query === "daily") {
    return <Daily />;
  } else {
    return <PageNotFound />;
  }
};

export default ForecastHandler;
