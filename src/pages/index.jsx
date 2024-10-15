import React from "react";
import Image from "next/image";
import { CustomHead, Footer, Header, MoreInfo } from "@components";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <CustomHead
        descriptionContent={
          "Trusted Providers of Support and home care for your loved ones"
        }
        pageName={"Home"}
      />
      <Header />
      <main>
        <h3 className="text-center font-lemon text-2xl md:text-3xl lg:text-4xl text-eerie-80 my-6">
          Certitude <span className="text-basil">Care Services</span>
        </h3>
        <HeroDisplay />
        <div className="w-[89%] max-w-[1700px] mx-auto space-y-10 my-10">
          <DisplayFeatures />
          <WelcomeCertitude />
          <MoreInfo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
function HeroDisplay() {
  return (
    <div
      className={`${mainOne[0]} h-[550px] flex justify-center items-center bg-no-repeat bg-cover`}
    >
      <div className="bg-white-90 max-w-[650px] w-[90%] mx-auto font-segoe p-9 space-y-6 text-maverick">
        <h5 className="text-center font-normal text-lg md:text-xl lg:text-2xl">
          Trusted Providers of <br />
          <span className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
            Support and home care <br /> for your loved ones
          </span>
        </h5>
        <Link
          href="/about-us"
          className="bg-urobilin font-segoe text-sm lg:text-base px-4 py-2 w-fit mx-auto block"
        >
          More about us
        </Link>
      </div>
    </div>
  );
}
function DisplayFeatures() {
  return (
    <div className="flex font-poppins justify-center xl:justify-between items-center mx-auto gap-4 flex-wrap">
      {mainFeatures.map((item) => (
        <Link href={item.url} key={item.heading}>
          <div className="w-[290px] text-center border-silver-chalice border-2">
            <div className="relative h-[250px]">
              <Image
                src={item.img}
                alt={item.heading}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="space-y-4 p-6">
              <h4 className="font-semibold text-lg lg:text-xl">
                {item.heading}
              </h4>
              <p className="text-sm lg:text-base">{item["sub-heading"]}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function WelcomeCertitude() {
  return (
    <section className="bg-certitude-intro-bg  bg-cover bg-no-repeat flex justify-center items-center font-poppins ">
      <div className="w-[98%] m:w-[90%] max-w-[750px] mx-auto text-center text-white sm:text-base md:text-lg lg:text-xl p-10">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Welcome to Certitude Care Service
        </h4>
        <p className="mb-1">
          Certitude Care Service recognises the importance of community, of
          supporting and influencing how we live within these communities now,
          in the past and in the future. Certitude Care Ltd are proud to be on the
          Staffordshire/Cheshire boarders; we are the local independent care
          providers of choice.
        </p>
        <p>
          Our flexible approach to personal care means that we are also able to
          provide a comprehensive support service for respite or emergency
          situations – often a preferred alternative to moving into residential
          care. This can be a simple drop-in service or more comprehensive
          24-hour live-in care, depending upon the requirements of the customer
          and their family.
        </p>
        <Link
          href="/about-us"
          className="bg-aegean text-sm lg:text-base font-segoe px-6 py-2 w-fit mx-auto mt-10 block"
        >
          Find Out More
        </Link>
      </div>
    </section>
  );
}

const mainFeatures = [
  {
    url: "/specialist-services",
    img: "/specialist-services.png",
    heading: "Specialist Services",
    "sub-heading":
      "Our caregivers provide palliative care that is of extraordinarily high caliber while gently allowing our patients to maintain their dignity and ability to live freely.",
  },
  {
    url: "/home-care",
    img: "/home-care.png",
    heading: "Home Care",
    "sub-heading":
      "Home care gives individuals the much deserved extra support, reassurance and companionship that may be needed for you to continue living at home as independently as is possible.",
  },
  {
    url: "/community-assistant",
    img: "/community-assistant.png",
    heading: "Community Assistant",
    "sub-heading":
      "We offer a unique choice of flexible home care. Our carers are trained in a wide range of areas and giving the clients confidence to continue living in their own homes all we strive for.",
  },
  {
    url: "/live-in-care",
    img: "/live-in-care.png",
    heading: "Live in Care",
    "sub-heading":
      "We help you live the life you want on your own terms closer to family and friends. We ensure our personalized approach will provide an unique package of care with a qualified caregiver.",
  },
];
const mainOne = [
  "bg-[url('/hero-section-bg.png')]",
  "bg-[url('/hero-section-bg.png')]",
  "bg-[url('/hero-section-bg.png')]",
  "bg-[url('/hero-section-bg.png')]",
];
