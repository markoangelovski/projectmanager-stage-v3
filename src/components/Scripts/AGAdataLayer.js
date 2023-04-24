import React from "react";
import { Helmet } from "react-helmet";
import config from "../../config";

const AGAdataLayer = () => {
  return (
    <Helmet>
      <script>{`var AGAdataLayer = ${JSON.stringify(
        config.AGAdataLayer
      )}`}</script>
    </Helmet>
  );
};

export default AGAdataLayer;
