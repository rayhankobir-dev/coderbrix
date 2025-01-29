/* eslint-disable @next/next/no-img-element */
import React from "react";

function SectionSeparator() {
  return (
    <div className="flex items-center justify-center gap-2">
      <img src="/images/vectors/line.svg" alt="" />
      <img
        className="h-5"
        src="/images/icons/section-separator-icon.png"
        alt=""
      />
      <img className="rotate-180" src="/images/vectors/line.svg" alt="" />
    </div>
  );
}

export default SectionSeparator;
