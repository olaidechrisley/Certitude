import React from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsFillTelephoneFill } from "react-icons/bs";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <header className="bg-aegean relative">
      <div className="font-poppins text-white font-semibold flex justify-between w-[89%] mx-auto py-7  max-w-[1700px]">
        <DesktopRelativeLinks />
        <MobileRelativeLinks isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <BsFillTelephoneFill className="mt-1" />
            <a href="tel:+447533906575" className="font-segoe block">
              +447533906575
            </a>
          </div>
          <FaFacebookF />
          <BsTwitter />
        </div>
        <button
          className="flex flex-col h-12 w-12 border-2
           border-primary-white rounded justify-center items-center group m:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 group-hover:opacity-100"
                : "group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-3 group-hover:opacity-100"
                : "group-hover:opacity-100"
            }`}
          />
        </button>
      </div>
    </header>
  );
}

function DesktopRelativeLinks() {
  return (
    <ul className="hidden m:flex gap-4">
      {[
        {
          name: "Home",
          url: "/",
        },
        {
          name: "About Us",
          url: "/about-us",
        },
        {
          name: "Funding Your Care",
          url: "/funding-your-care",
        },
        {
          name: "Types of Care",
          url: "/types-of-care",
        },
        {
          name: "Contact Us",
          url: "/contact-us",
        },
      ].map((item) =>
        item.name === "Types of Care" ? (
          <li key={item.name} className="group/item relative">
            <p className="flex items-center cursor-pointer ">
              {item.name}
              <BiChevronDown />
            </p>
            <ul
              className={`absolute group-hover/item:scale-y-100 scale-y-0 top-full bg-maverick origin-top transition-all font-segoe -left-[30%] w-[220px] z-50`}
            >
              {[
                {
                  name: "Specialist Services",
                  url: "/specialist-services",
                },
                {
                  name: "Home care",
                  url: "/home-care",
                },
                {
                  name: "Community Assistance",
                  url: "/community-assistant",
                },
                {
                  name: "Live in Care",
                  url: "/live-in-care",
                },
                {
                  name: "Continuing Health Care",
                  url: "/continuing-health-care",
                },
              ].map((item) => (
                <li
                  key={item.name}
                  className="hover:bg-eerie px-5 py-3 transition-all"
                >
                  <Link href={item.url} className="w-full block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={item.name}>
            <Link href={item.url} className="w-full block">
              {item.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
function MobileRelativeLinks({ isOpen, setIsOpen }) {
  const [types, setTypes] = React.useState(false);
  return (
    <div
      className={`${
        isOpen ? "scale-y-100" : "scale-y-0"
      } absolute top-full origin-top m:hidden inset-x-0 bg-maverick transition-all z-50`}
    >
      <ul className="w-[89%] mx-auto max-w-[1700px] py-2 space-y-5">
        {[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "About Us",
            url: "/about-us",
          },
          {
            name: "Funding Your Care",
            url: "/funding-your-care",
          },
          {
            name: "Types of Care",
            url: "/types-of-care",
          },
          {
            name: "Contact Us",
            url: "/contact-us",
          },
        ].map((item) =>
          item.name === "Types of Care" ? (
            <li
              key={item.name}
              className="group/item relative"
              onClick={() => {
                setTypes((prev) => !prev);
              }}
            >
              <p className="flex items-center cursor-pointer ">
                {item.name}
                <BiChevronDown />
              </p>
              <ul
                className={`${
                  types ? "scale-y-100 h-full" : "scale-y-0 h-0"
                } top-full bg-maverick origin-top transition-all font-segoe -left-[30%] w-[220px] z-50`}
              >
                {[
                  {
                    name: "Specialist Services",
                    url: "/specialist-services",
                  },
                  {
                    name: "Home care",
                    url: "/home-care",
                  },
                  {
                    name: "Community Assistance",
                    url: "/community-assistant",
                  },
                  {
                    name: "Live in Care",
                    url: "/live-in-care",
                  },
                  {
                    name: "Continuing Health Care",
                    url: "/continuing-health-care",
                  },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="hover:bg-eerie px-5 py-3 transition-all"
                  >
                    <Link
                      href={item.url}
                      onClick={() => {
                        setIsOpen((prev) => !prev);
                      }}
                      className="w-full block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.name}>
              <Link href={item.url} className="w-full block">
                {item.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
