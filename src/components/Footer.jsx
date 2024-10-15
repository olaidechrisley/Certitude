import { Header } from "@components";
import Image from "next/image";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { BiChevronRight } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { MdSend } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  function Input({ placeholder, type, name }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="p-4 text-black"
        required
      />
    );
  }

  function sendEmail(e) {
    e.preventDefault();
    // const token = captchaRef.current.getValue();
    function ClearInputs() {
      form.current[0].value = "";
      form.current[1].value = "";
      form.current[2].value = "";
      form.current[3].value = "";
      form.current[5].value = "";
    }
    // if (!token) {
    //   toast.warning("Kindly verify you are not a robot!", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   return;
    // }
    const id = toast.loading("Please wait...");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.update(id, {
            render: "Message successfully sent!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          ClearInputs();
          // captchaRef.current.reset();
        },
        (error) => {
          toast.update(id, {
            render: "Message not sent!",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
          console.log(error.text);
          ClearInputs();
        }
        // captchaRef.current.reset();
      );
  }

  const captchaRef = React.useRef(null);
  const form = React.useRef();
  return (
    <footer className="bg-aegean">
      <div className="w-[89%] max-w-[1700px] mx-auto font-poppins py-10">
        {/* <div className="bg-white p-6">
          <Image
            src="/asset_cqclogo_update.png"
            alt="asset_cqclogo_update"
            width={150}
            height={50}
          />
          <h4 className="font-semibold text-lg my-2">Certitude Care Service</h4>
          <div className="bg-light-silver-40 p-4 space-y-2">
            <p className="text-base font-medium">CQC overall rating</p>
            <div className="flex items-center gap-4">
              <p className="text-lg font-semibold">Good</p>
              <GoPrimitiveDot size={22} className="text-north-texas-green" />
            </div>
            <p className="text-base font-light">16 February 2023</p>
            <button className="bg-white text-palatinate px-4 py-1 font-medium flex items-center border-eerie-50 border rounded-md">
              See the report <BiChevronRight size={30} />
            </button>
          </div>
        </div> */}
        <div className="space-y-8 text-white">
          <h4 className="text-center font-medium text-3xl my-5">
            Contact Us Today
          </h4>

          <div className="flex gap-6 justify-between flex-wrap">
            <div className="font-light text-lg">
              <h5 className="text-xl font-semibold">Certitude Care Service</h5>
              <p>
                90 Lightwood Road <br />
                Stoke on Trent, <br />
                ST34JF
              </p>
              <p className="mt-4">
                T. <a href="tel:+447533906575">+447533906575</a>
              </p>
              <p>
                E:{" "}
                <a href="mailto:info@certitudecareservices.co.uk">info@certitudecareservices.co.uk</a>
              </p>
              <div className="flex items-center gap-2 mt-1">
                <FaMapMarkerAlt />
                <p>View Map</p>
              </div>
            </div>
            <form
              className="flex gap-14 justify-between flex-wrap"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex flex-col gap-3 mt-4 w-full md:w-fit">
                <Input
                  type={"text"}
                  placeholder={"Full Name"}
                  name={"user_name"}
                />
                <Input type="email" placeholder="Email" name={"user_email"} />
                <Input
                  type="text"
                  placeholder="Phone Number"
                  name={"user_phoneNumber"}
                />
                {/* <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}
                  ref={captchaRef}
                /> */}
                <div className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy-policy"
                    id="privacy-policy"
                    required
                  />
                  <label htmlFor="privacy-policy" className="cursor-pointer">
                    I have read and agree to the{" "}
                    <span className="underline">privacy policy</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-fit gap-3">
                <textarea
                  placeholder="Message"
                  name="user_message"
                  className="p-4 mt-4 h-[200px] text-black"
                  required
                />
                <button
                  type="submit"
                  className="bg-maverick flex items-center gap-2 rounded-md text-sm lg:text-base font-segoe px-10 py-2 w-fit mx-auto"
                >
                  Send <MdSend />
                </button>
              </div>
            </form>
          </div>
          <div className="flex item-center gap-5">
            <FaFacebookF />
            <BsTwitter />
          </div>
          <div className="flex item-center justify-between flex-wrap gap-5">
            <ul className="flex gap-4 flex-wrap">
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
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
}
