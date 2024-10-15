import React from "react";
import Image from "next/image";
import { Footer, Header, SubHeader, MoreInfo, CustomHead } from "@components";
import ctl from "@netlify/classnames-template-literals";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function AboutUs() {
  return (
    <div>
      <CustomHead
        descriptionContent={"About Certitude Care Services"}
        pageName={"About Us"}
      />
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10">
        <SubHeader
          title={"About Certitude Care Services"}
          img={"bg-about-CCS-bg"}
        />
        <MainInfo />
        {/* <section className="[&>*]:text-center [&>h4]:font-semibold [&>h4]:text-xl [&>h5]:text-lg [&>h5]:font-medium [&>p]:font-light [&>p]:leading-8 font-poppins max-w-[1124px] mx-auto space-y-4 mb-6 py-10">
          <h4>CQC Inspected</h4>
          <p>
            Certitude Care services was registered by CQC on 23 March 2017. The
            assessment showed that our services <br /> assessed are likely to be
            safe, effective, caring, responsive and well-led. We are awaiting a
            full inspection from the <br /> CQC.
          </p>
          <h5>When inspected by them, the assessments could include:</h5>
          <p>
            site visits <br /> criminal record checks
            <br /> interviews with key managers
            <br /> a detailed review of how the service is run
            <br /> evidence to demonstrate that our service is safe, effective,
            responsive, caring and well-led
          </p>
          <p>
            Follow-up inspections of new services are undertaken regularly
            following registration.
          </p>
          <h4>Who runs this service</h4>
          <p>
            Certitude care Services is run by Certitude care Services <br /> Mrs
            Regina Ekie Taku <br /> Registered Manager and nominated individual
          </p>
          <h4>Specialisms/services</h4>
          <p>
            Dementia, Learning disabilities, Mental health conditions, Personal
            care, Physical disabilities, Sensory impairments, <br /> Caring for
            adults under 65 yrs, Caring for adults over 65 yrs
          </p>
          <Image
            src="/cqc.png"
            width={190}
            height={60}
            alt="cqc.png"
            className="mx-auto"
          />
        </section> */}
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}

function MainInfo() {
  const WhoWeAreImages = [
    "/who-we-are.png",
    "https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxDYXJlJTIwU2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  const WhatDoWeDoImages = [
    "/what-do-we-do.png",
    "https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxDYXJlJTIwU2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-10 mb-6 m:px-16 py-20">
      <div className="flex gap-16 flex-col m:flex-row">
        <Carousel images={WhoWeAreImages} />

        <div className={sectionStyles}>
          <h4>Who we are</h4>
          <p>
            Certitude Care is an established community based care and support
            provider. We provide Domiciliary Care and 24-hour Live-in Care in
            the comfort and security of your own home. In addition to this, we
            provide Day and Night Sitting Services and Respite Care.
          </p>
          <p>
            Our commitment to working with vulnerable adults, their families and
            carers enables us to develop person centred services that are
            sensitive to needs; adaptable to circumstances; innovative in
            delivery and clear in outcomes.
          </p>
        </div>
      </div>
      <div className="flex gap-16 flex-col-reverse m:flex-row">
        <div className={sectionStyles}>
          <h4>What do we do?</h4>
          <p>
            We provide great quality domiciliary care for people within the
            comfort of their own homes.
          </p>

          <p>
            We have been providing excellent customer care for many years now
            and we take great pride in our service.
          </p>

          <p>
            Please feel free to call, email or meet us for an informal chat
            should you require any information about the services that we offer.
          </p>
        </div>
        {/* <div className="relative min-w-[100px] w-full m:w-[50%] h-[300px]">
          <Image src="/what-do-we-do.png" alt="what-do-we-do" fill />
        </div> */}
        <Carousel images={WhatDoWeDoImages} />
      </div>
      <div
        className={`${sectionStyles} m:w-[50%] [&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-2xl [&>h4]:font-medium `}
      >
        <h4>Specialisms/Services</h4>
        <p>
          Dementia, Learning disabilities, Mental health conditions, Personal
          care, Physical disabilities, Sensory impairments, Caring for adults
          under 65 yrs, Caring for adults over 65 yrs.
        </p>
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
const sectionStyles = ctl(`
  flex-1 
  [&>p]:text-sm 
  m:[&>p]:text-base 
  [&>p]:leading-8 
  space-y-4 
  [&>p]:font-light 
  [&>h4]:text-xl 
  m:[&>h4]:text-2xl 
  [&>h4]:font-medium
`);
