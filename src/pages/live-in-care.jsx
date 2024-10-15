import React from "react";
import Image from "next/image";
import { Footer, Header, SubHeader, MoreInfo, CustomHead } from "@components";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function LiveInCare() {
  return (
    <div>
      <CustomHead
        descriptionContent={`Live-in care helps you live the life you want, on your own terms, in your own home, close to family and friends. We ensure that with our person-centred approach, we will put together a unique package of care with a carefully chosen carer. Together, we’ll help you stay in
        the home you know and love.`}
        pageName={"Live In Care"}
      />

      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10">
        <SubHeader title={"Live in Care"} img={"bg-types-of-care"} />
        <MainInfo />
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}

function MainInfo() {
  const LiveInCareImages = [
    "/what-do-we-do.png",
    "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxDYXJlJTIwU2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-10 py-10 m:px-16 m:py-20 mb-10">
      <div className="flex gap-16 flex-col m:flex-row">
        <Carousel images={LiveInCareImages} />

        <div className="flex-1 [&>p]:text-sm m:[&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-lg m:[&>h4]:text-xl [&>h4]:font-medium [&>h3]:font-semibold [&>h3]:text-2xl m:[&>h3]:text-3xl">
          <h3>Live in care</h3>
          <p>
            Live-in care helps you live the life you want, on your own terms, in
            your own home, close to family and friends. We ensure that with our
            person-centered approach, we will put together a unique package of
            care with a carefully chosen carer. Together, we’ll help you stay in
            the home you know and love.
          </p>
          <p>Live-in care means you can keep the same daily routines</p>

          <p>
            With a spare room in your home, your carer will be there to support
            you each day, as much or as little as you like and according to what
            matters to you most.
          </p>
          <p>
            For more information, please contact us using details on our contact
            page.
          </p>
        </div>
      </div>
      <div className="font-light space-y-5">
        <h3>HOW LIVE-IN CARE WORKS</h3>
        <h4 className="font-medium">
          This is best suited for individuals and their families who prefer to
          know that there is always a dedicated carer at hand, whatever the time
          of day.
        </h4>
        <p>
          Another advantage of living care is the fact that with our service,
          constant care and companionship will be available to you 24/7. We are
          flexible and can vary the support desired which might include:
          personal care, support with mobility and medication, social visits,
          preparing meals and feeding as required. Our carers can also help you
          maintain your home and give support with housekeeping, cleaning,
          laundry and shopping, as well as trips out.
        </p>
        <p>
          Such support round the clock will allow you and your loved ones to
          spend quality family time together.
        </p>
        <p>
          Call us or email today and one of our friendly advisers will explain
          the process to you on how live-in care works.
        </p>
        <h3 className="font-bold text-xl">Who is live in care for?</h3>
        <p>
          Living care can be for anyone who needs round the clock care and
          support at home. This includes:
        </p>
        <ul className="list-disc pl-4">
          {[
            "People who have been or are going to be discharged from hospital. Your discharge from hospital can at times depend on whether you have the right level of care available to you at home. families might not be able to provide such level of care and deal with other personal and family commitments. We also have a dedicated on-call team and carers which means that we can often respond within 24 hours if you or your loved one is being discharged from hospital and commence care almost immediately.",
            "People who are have home carers or visiting carers can also switch to live in care if their needs have changed and they require more support",
            "Some people who have stayed in a residential setting might not like it and prefer their independence in their home with support. Live-in care might be the best option for such ones.",
          ].map((item) => (
            <li key={item} className="pl-2 text-sm m:text-base">
              {item}
            </li>
          ))}
        </ul>
        <h5 className="font-bold">
          For more information about live in care, call us today on
          +447533906575 or email us : tonabay@gmail.com
        </h5>
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
