import Link from "next/link";
import React from "react";

function SubHeader({ title, img }) {
  return (
    <section>
      <h3 className="text-center font-lemon text-2xl md:text-3xl lg:text-4xltext-eerie-80 my-6 px-10">
        <Link href="/">
          Certitude <span className="text-basil">Care Services</span>
        </Link>
      </h3>
      <div
        className={`${img} h-[180px] grid place-items-center bg-cover font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-white w-full bg-no-repeat text-center px-7`}
      >
        <h4>{title}</h4>
      </div>
    </section>
  );
}

export default SubHeader;
