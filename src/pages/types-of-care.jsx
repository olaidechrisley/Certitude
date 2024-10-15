import React from "react";
import Image from "next/image";
import { Footer, Header, SubHeader, MoreInfo, CustomHead } from "@components";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function TypesOfCare() {
  return (
    <div>
      <CustomHead
        descriptionContent={`Some people with long-term complex health needs qualify for free social care arranged and funded solely by the NHS. This is known as NHS continuing healthcare. People with terminal illnesses may also qualify.`}
        pageName={"Types Of Care"}
      />
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10">
        <SubHeader title={"Types of Care"} img={"bg-types-of-care"} />
        <MainInfo />
        <section className="flex flex-col-reverse m:flex-row my-7 items-center">
          <div className="bg-bright-gray font-poppins italic [&>h4]:text-lg [&>h4]:font-bold p-10 m:w-[70%]">
            <h4>Continuing Health Care</h4>
            <div className="space-y-5">
              <p>
                Some people with long-term complex health needs qualify for free
                social care arranged and funded solely by the NHS. This is known
                as NHS continuing healthcare. People with terminal illnesses may
                also qualify.
              </p>
              <p>
                Certitude care works closely with some local continuing health care
                teams to provide such care. Service users are referred to us
                from local hospitals and hospices and we provided care for them
                within the comfort of their homes.
              </p>
              <p>
                To find out if you qualify, speak to your local NHS CCG. <br />
                If you're eligible for NHS continuing healthcare, the next stage
                is to arrange a care and support package that meets your
                assessed needs.
              </p>
              <p>
                Depending on your situation, different options could be
                suitable, including support in your own home and the option of a
                personal health budget.
              </p>
            </div>
          </div>
          <div className="relative min-w-[100px] w-full m:w-[30%] h-[250px]">
            <Image src="/who-we-are.png" alt="who-we-are" fill />
          </div>
        </section>
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
  const CommunityAssistantImages = [
    "https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxDYXJlJTIwU2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "/what-do-we-do.png",
    "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  const LiveInCareImages = [
    "/what-do-we-do.png",
    "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxDYXJlJTIwU2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  const sectionStyle =
    "flex-1 [&>p]:text-sm m:[&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-lg m:[&>h4]:text-xl [&>h4]:font-medium [&>h3]:font-semibold [&>h3]:text-2xl m:[&>h3]:text-3xl";
  return (
    <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-16 py-20">
      <div className="flex gap-16 flex-col m:flex-row">
        <Carousel images={WhoWeAreImages} />

        <div className={sectionStyle}>
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

      <div className="flex gap-16 flex-col-reverse m:flex-row">
        <div className={sectionStyle}>
          <h4>Home Care</h4>
          <p>
            Domiciliary care is provided for people who still have their own
            homes but who require additional support with household tasks,
            personal care or any other activity that allows them to maintain
            their independence and quality of life.
          </p>
          <p>
            Our care workers will become an essential part of our clients' daily
            routine. We understand that our clients have complex and unique
            needs and we tailor our care packages to our clients' individual
            needs.
          </p>
        </div>

        <Carousel images={WhatDoWeDoImages} />
      </div>
      <div className="flex gap-16 flex-col m:flex-row">
        <Carousel images={CommunityAssistantImages} />

        <div className={sectionStyle}>
          <h4>Community Assistant</h4>
          <p>
            We offer a unique choice of flexible home care and support. Our
            carers are trained in a whole range of areas and can assist with
            light housework, shopping and social visits, giving our clients the
            confidence to continue living in their own homes.
          </p>
        </div>
      </div>
      <div className="flex gap-16 flex-col-reverse m:flex-row">
        <div className={sectionStyle}>
          <h4>Live in care</h4>
          <p>
            Live-in care helps you live the life you want, on your own terms, in
            your own home, close to family and friends. We ensure that with our
            person-centred approach, we will put together a unique package of
            care with a carefully chosen carer. Together, we'll help you stay in
            the home you know and love. Live-in care means you can keep the same
            daily routines
          </p>
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
        <Carousel images={LiveInCareImages} />
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
