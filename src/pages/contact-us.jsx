import React from "react";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Footer, Header, SubHeader, MoreInfo, CustomHead } from "@components";

export default function ContactUs() {
  return (
    <div>
      <CustomHead
        descriptionContent={"Certitude Care Service"}
        pageName={"Contact Us"}
      />
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10 space-y-10">
        <SubHeader title={"Contact US"} img={"bg-types-of-care"} />
        <section className="bg-contact-bg py-16 px-4 flex justify-center m:justify-end">
          <div className="max-w-[600px] w-[90%] bg-aegean p-10 font-poppins text-white">
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Contact US
            </h4>
            <div className="flex gap-3 mt-2">
              <FaMapMarkerAlt className="mt-2" />{" "}
              <p className="font-light leading-7 text-sm m:text-base">
                <span className="font-semibold">Certitude Care Service</span>{" "}
                <br />
                90 Lightwood Road <br />
                Stoke on Trent, <br />
                ST34JF
              </p>
            </div>
            <div className="flex items-center gap-3 font-light mt-6">
              <FaPhoneAlt />
              <p className="text-sm m:text-base">
                T. <a href="tel:+447533906575">+447533906575</a>
              </p>
            </div>
            <div className="flex items-center gap-3 font-light">
              <MdEmail />
              <p className="text-sm m:text-base">
                E:{" "}
                <a href="mailto:info@certitudecareservices.co.uk">info@certitudecareservices.co.uk</a>
              </p>
            </div>
          </div>
        </section>
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}
