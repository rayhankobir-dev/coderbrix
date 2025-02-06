import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <main className="max-w-6xl h-[80vh] flex flex-col justify-center items-center mx-auto px-6 md:px-4">
      <h1 className="font-title font-medium text-5xl md:text-5xl lg:text-6xl text-primary">
        404
      </h1>
      <h2 className="font-uncut font-medium tracking-tighter text-4xl text-primary">
        Page not found
      </h2>

      <div className="max-w-lg mx-auto flex flex-col items-center gap-2 mt-10">
        <p className="text-lg text-center">
          The page you are looking for does not exist. If you think this is an
          error, please contact us at <Link href="">support@coderbrix.com</Link>
        </p>
      </div>
    </main>
  );
}

export default NotFoundPage;
