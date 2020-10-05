import React from "react";
import { Link } from "react-router-dom";

import PageMetaData from "../../components/PageMetaData/PageMetaData.js";
import TitleMain from "../../components/TitleMain/TitleMain.js";

const Error = () => {
  return (
    <>
      <PageMetaData title={"Borked! | jBot"} />
      <TitleMain>borked</TitleMain>
      <Link to={"/"}>Ho Gome</Link>
    </>
  );
};

export default Error;
