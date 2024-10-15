import React from "react";
import { Footer, Header, SubHeader, MoreInfo, CustomHead } from "@components";

export default function Testimonial() {
  return (
    <div>
      <CustomHead
        descriptionContent={`This company has recently taken over my father’s care and “wow” these people are truly fantastic! Attention to detail has been great. What a breath of fresh air – professional, efficient, reliable. I could not have asked for better care for my father. Only wished he’d been assigned these people earlier – the previous care team should hang their heads because these people make them look like amateurs. Absolutely recommend – do not hesitate if you have the chance of getting them because their care standards are impressive.`}
        pageName={"Testimonial"}
      />
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10">
        <SubHeader
          title={"What our clients say about our services"}
          img={"bg-about-CCS-bg"}
        />
        <MainInfo />
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}

function MainInfo() {
  return (
    <section className="[&>*]:text-center [&>h3]:font-semibold [&>h3]:text-2xl m:[&>h3]:text-3xl [&_p]:text-sm m:[&_p]:text-base [&_h5]:text-sm m:[&_h5]:text-base [&_h5]:font-semibold [&_p]:font-light [&_p]:leading-10 font-poppins max-w-[1124px] mx-auto my-6 py-10">
      <h3>TESTIMONIALS</h3>
      <p>
        This is what our clients have to say about the services that we
        provide….
      </p>
      <div className="italic mt-16 font-light space-y-9 ">
        <div className="">
          <p>
            This company has recently taken over my father’s care and “wow”
            these people are truly fantastic! Attention to detail has been
            great. What a breath of fresh air – professional, efficient,
            reliable. I could not have asked for better care for my father. Only
            wished he’d been assigned these people earlier – the previous care
            team should hang their heads because these people make them look
            like amateurs. Absolutely recommend – do not hesitate if you have
            the chance of getting them because their care standards are
            impressive.
          </p>
          <h5>J.E. (Audlem)</h5>
        </div>

        <div className="">
          <p>
            I have seen the care they provide to their clients. It is done with
            Passion. I love you all Certitude care.
          </p>
          <h5>F M (London)</h5>
        </div>

        <div className="">
          <p>
            Special thanks to Certitude Care for their outstanding support and care
            given.
          </p>
          <h5>D B (Haslington)</h5>
        </div>

        <div className="">
          <p>
            Just a note to thank you so much for the kind and dignified way you
            cared for Pat. You always had a smile for him and made him feel very
            comfortable in which was a very uncomfortable place for Pat to be.
            Pat really did think a lot of you. So thank you once again for
            caring for my lovely Pat.
          </p>
          <h5>S (Crewe)</h5>
        </div>

        <div className="">
          <p>
            Bryan and family expressed their sincere thanks to all at Certitude Care.
            For taking care of Pat when she was alive. Special thanks are given
            to Beatrice for her diligent care and friendship to Pat.
          </p>
          <h5>B.H. (Wynbunbury)</h5>
        </div>

        <div className="">
          <p>
            Dear Regina and Thomas. I would like to express my sincere thanks
            for the kindness and tender care you and your staff gave may wife
            Joan. I will always owe you a debt of gratitude for the expert care
            that you and your staff provided. I highly recommend your care
            service to anyone who has a love one suffering painful illness. You
            will always be regarded as special friends to me and always be
            welcome in my home .
          </p>
          <h5>W.B (Crewe)</h5>
        </div>

        <div className="">
          <p>
            More than happy with the service that we are getting . No concerns
            at all.
          </p>
          <h5>R. H. (Stoke on Trent)</h5>
        </div>
        <div className="">
          <p>
            Everything seems fine. Thank you. Thanks for your information and
            keeping in touch by notes or telephone. Thanks for looking after
            Gladys.
          </p>
          <h5>P.B. (Stoke on Trent)</h5>
        </div>

        <div className="">
          <p>
            We had care provided by Certitude Care for my mother through
            Hertfordshire CCG. The care was of an excellent standard and we
            would recommend this agency and in fact have recommended them to
            people. The care provided was of the highest standard and delivered
            with respect and compassion, the standard of care made a great
            difference to my mother’s last days the careers always bringing a
            smile to her face.
          </p>
          <h5>E.B. (Hertfordshire)</h5>
        </div>
      </div>
    </section>
  );
}
