import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div>
        <h1 className="font-bold">404</h1>
        <div className="cloak__wrapper">
          <div className="cloak__container">
            <div className="cloak"></div>
          </div>
        </div>
        <div className="info"></div>
      </div>
      <h2>We can't find that page please go back to the homePage</h2>
      <Link href="/">
        <button>Route back home</button>
      </Link>
    </>
  );
}

export default page;
