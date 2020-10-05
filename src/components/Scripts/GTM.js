import React from "react";
import { Helmet } from "react-helmet";

const {
  JBOTdataLayer: { SiteLocalContainer }
} = require("../../config");

const GTM = () => {
  return (
    <Helmet>
      <script>
        {`(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "${SiteLocalContainer}")`}
      </script>
    </Helmet>
  );
};

export const GTMnoScript = () => {
  // Not currently used. Make sure to update the GTM ID in index.html noscript tag
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${SiteLocalContainer}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title={"noscript gtm"}
      ></iframe>
    </noscript>
  );
};

export default GTM;
