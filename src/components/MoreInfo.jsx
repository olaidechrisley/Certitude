import React from "react";

export default function MoreInfo() {
  return (
    <div className="bg-for-more-info-bg bg-no-repeat bg-cover font-semibold p-14 font-poppins">
      <p className="text-xl m:text-2xl lg:text-3xl text-white text-center">
        For more information please contact{" "}
        <a href="tel:+447533906575" className="underline decoration-2">
          +447533906575
        </a>
      </p>
    </div>
  );
}
