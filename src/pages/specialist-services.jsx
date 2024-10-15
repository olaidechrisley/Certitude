import React from "react";
import Image from "next/image";
import { Footer, Header, SubHeader, MoreInfo, CustomHead } from "@components";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function SpecialistServices() {
  return (
    <div>
      <CustomHead
        descriptionContent={`Our care givers deliver palliative care of an exceptionally high standards sensitively allowing our clients to have the dignity they deserve to help them to continue living independently.`}
        pageName={"Specialist Services"}
      />
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10">
        <SubHeader title={"Specialist Services"} img={"bg-types-of-care"} />
        <MainInfo />
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}
function MainInfo() {
  const SpecialistServiceImages = [
    "/who-we-are.png",
    "https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxDYXJlJTIwU2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-10 py-10 m:px-16 m:py-20 mb-10">
      <div className="flex gap-16 flex-col m:flex-row">
        <Carousel images={SpecialistServiceImages} />

        <div className="flex-1 [&>p]:text-sm m:[&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-lg m:[&>h4]:text-xl [&>h4]:font-medium [&>h3]:font-semibold [&>h3]:text-2xl m:[&>h3]:text-3xl ">
          <h3>Specialist Services</h3>
          <h4>End of life care</h4>
          <p>
            Our care givers deliver palliative care of an exceptionally high
            standards sensitively allowing our clients to have the dignity they
            deserve to help them to continue living independently.
          </p>
          <h4>Care for people with illness or disability</h4>
          <p>
            As well as providing day to day personal care{" "}
            <span className="font-bold">CERTITUDE CARE</span> team can also
            offer the support, motivation and encouragement needed to maintain
            our clients' independence. Our caring sensitive team understand the
            need to listen to our clients' needs and to help them to make their
            own life decisions whether big or small. Even in the case of severe
            disability, we can help the individual live a full and enjoyable
            lives.
          </p>
          <p>
            We focus on the most important aspects of our clients care whilst
            never forgetting to ensure our service provision is SMART - Specific
            - Measurable - Adaptable - Reassuring - and Timely.
          </p>
          <p>
            As well as the above, we also specialise in providing the following
            types of care:
          </p>
          <p>
            Dementia care, Learning disabilities, Personal care, Physical
            disabilities, Sensory impairments, Caring for adults under 65 yrs,
            Caring for adults over 65 yrs
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
