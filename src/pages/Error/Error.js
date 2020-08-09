import React from "react";
import { Link } from "react-router-dom";

import TitleMain from "../../components/TitleMain/TitleMain.js";

const Error = () => {
  return (
    <>
      <TitleMain>borked</TitleMain>
      <Link to={"/"}>Ho Gome</Link>
    </>
  );
};

export default Error;
