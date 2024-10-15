import React from "react";
import Image from "next/image";
import { Footer, Header, SubHeader, MoreInfo, CustomHead } from "@components";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function ContinuingHealthCare() {
  return (
    <div>
      <CustomHead
        descriptionContent={`Some people with long-term complex health needs qualify for free
        social care arranged and funded solely by the NHS. This is known as
        NHS continuing healthcare. People with terminal illnesses may also
        qualify.`}
        pageName={"Continuing Health Care"}
      />
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10">
        <SubHeader title={"Continuing Health Care"} img={"bg-types-of-care"} />
        <MainInfo />
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}

function MainInfo() {
  const images = [
    "/who-we-are.png",
    "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxDYXJlJTIwU2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-10 py-10 m:px-16 m:py-20 mb-10">
      <div className="flex gap-16 flex-col m:flex-row">
        <Carousel images={images} />

        <div className="flex-1 [&>p]:text-sm m:[&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-xl m:[&>h4]:text-2xl [&>h4]:font-medium [&>h3]:font-semibold [&>h3]:text-2xl m:[&>h3]:text-3xl">
          <h3>Continuing Health Care</h3>

          <p>
            Some people with long-term complex health needs qualify for free
            social care arranged and funded solely by the NHS. This is known as
            NHS continuing healthcare. People with terminal illnesses may also
            qualify.
          </p>
          <p>
            Certitude care works closely with some local continuing health care teams
            to provide such care. Service users are referred to us from local
            hospitals and hospices and we provided care for them within the
            comfort of their homes.
          </p>
          <p>To find out if you qualify, speak to your local NHS CCG.</p>
          <p>
            If you’re eligible for NHS continuing healthcare, the next stage is
            to arrange a care and support package that meets your assessed
            needs.
          </p>
          <p>
            Depending on your situation, different options could be suitable,
            including support in your own home and the option of a personal
            health budget.
          </p>
        </div>
      </div>
    </section>
  );
}
function Carousel(props) {
  const [currentImage, setCurrentImage] = React.useState(0);

  const handlePrevClick = () => {
    setCurrentImage(
      (currentImage - 1 + props.images.length) % props.images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % props.images.length);
  };
  const ProductImg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  return (
    <div className="relative h-[300px] min-w-[100px] w-full m:w-[40%]">
      <div className="h-full relative">
        <Image
          src={props.images[currentImage]}
          alt={`Image ${currentImage}`}
          style={ProductImg}
          fill
        />
      </div>

      <button
        onClick={handlePrevClick}
        style={{
          position: "absolute",
          left: "0%",
          bottom: "0%",
          paddingInline: "26px",
          paddingBlock: "16px",
        }}
        className="bg-aegean-60 text-white"
      >
        <MdOutlineKeyboardArrowLeft size={30} />
      </button>
      <button
        onClick={handleNextClick}
        style={{
          position: "absolute",
          right: "0%",
          bottom: "0%",
          paddingInline: "26px",
          paddingBlock: "16px",
        }}
        className="bg-aegean-60 text-white"
      >
        <MdOutlineKeyboardArrowRight size={30} />
      </button>
    </div>
  );
}
