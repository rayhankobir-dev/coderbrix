"use client";

import Script from "next/script";
import { useEffect } from "react";

function SalesIQ() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://salesiq.zohopublic.com/widget?wc=siq9d566baafdbb9f5dccc99993a35b3917a024a55018554856f21d3eaa5299ceae";
    script.type = "text/javascript";
    script.id = "zsiqscript";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Script
        id="zsiqscript"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var $zoho = $zoho || {};
            $zoho.salesiq = $zoho.salesiq || {widgetcode: "your-widget-code", values: {}, ready: function() {}};
            var d = document;
            var s = d.createElement("script");
            s.type = "text/javascript";
            s.id = "zohoSalesiqScript";
            s.defer = true;
            s.src = "https://salesiq.zoho.com/widget";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s, t);
          `,
        }}
      />
    </>
  );
}

export default SalesIQ;
