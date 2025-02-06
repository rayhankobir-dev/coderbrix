import Link from "next/link";
import React from "react";

function Promotion() {
  return (
    <div className="flex items-center justify-center gap-2 py-2 border-b font-light font-manrope text-lg text-white bg-primary/90">
      🚀 Get first year free support
      <Link href="/contact">
        <span className="font-medium">Contact Us</span>
      </Link>
    </div>
  );
}

export default Promotion;
