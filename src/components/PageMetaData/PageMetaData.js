import React from "react";
import { Helmet } from "react-helmet";

const {
  canonical
} = require(`../../config/${process.env.REACT_APP_API_CONFIG}.json`);

const PageMetaData = props => {
  return (
    <Helmet>
      {props.title && <title>{props.title}</title>}
      {props.title && <meta name="title" content={props.title} />}
      {props.title && <meta property="og:title" content={props.title} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default PageMetaData;
