import React from "react";
import Image from "next/image";

import { Footer, Header, SubHeader, MoreInfo, CustomHead } from "@components";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function CommunityAssistant() {
  return (
    <div>
      <CustomHead
        descriptionContent={
          "We offer a unique choice of flexible home care and support. Our carers are trained in a whole range of areas and can assist with light housework, shopping and social visits, religious visits,giving our clients the confidence to continue living in their own homes as well as keep up with their social routines."
        }
        pageName={"Community Assistant"}
      />
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10">
        <SubHeader title={"Community Assistant"} img={"bg-types-of-care"} />
        <MainInfo />
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}

function MainInfo() {
  const CommunityAssistantImages = [
    "https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxDYXJlJTIwU2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "/what-do-we-do.png",
    "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-10 py-10 m:px-16 m:py-20 mb-10">
      <div className="flex gap-16 flex-col m:flex-row">
        <Carousel images={CommunityAssistantImages} />

        <div className="flex-1 [&>p]:text-sm m:[&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-lg m:[&>h4]:text-xl [&>h4]:font-medium [&>h3]:font-semibold [&>h3]:text-2xl m:[&>h3]:text-3xl ">
          <h3>Community Assistant</h3>
          <p>
            We offer a unique choice of flexible home care and support. Our
            carers are trained in a whole range of areas and can assist with
            light housework, shopping and social visits, religious visits,
            giving our clients the confidence to continue living in their own
            homes as well as keep up with their social routines.
          </p>

          <p>
            You can plan your daily routine and we can provide one to one
            support to enable you keep abreast with your home and social
            schedules.
          </p>

          <p>
            For more information, please contact us using the details on
            info@certitudecare.co.uk
          </p>

          <h4>What can we provide?</h4>
          <div>
            <p>We can assist you with:</p>
            <ul className="list-disc pl-3">
              {[
                "light housework",
                "shopping",
                "accompany you on social visits",
                "support you to plan your social life/ schedule",
              ].map((item) => (
                <li key={item} className="text-sm m:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
