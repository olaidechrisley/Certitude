import React from "react";
import { Footer, Header, SubHeader, MoreInfo, CustomHead } from "@components";

export default function FundingYourCare() {
  return (
    <div>
      <CustomHead
        descriptionContent={`Understanding care funding options for you or a loved one can be a complex and daunting process. The cost of care is dependent on your personal circumstances and, by carrying out a little research and utilising resources available to you, your options become clearer and easier to understand. When considering your best options for funding care the first step is to ensure that all state entitlements are explored.`}
        pageName={"Funding Your Care"}
      />
      <Header />
      <main className="w-[89%] max-w-[1700px] mx-auto mb-10">
        <SubHeader title={"Funding Your Care"} img={"bg-types-of-care"} />
        <MainInfo />
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}

function MainInfo() {
  return (
    <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-10 py-10 mb-10">
      <div className="flex-1 [&>p]:text-sm m:[&>p]:text-base italic [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-base m:[&>h4]:text-lg [&>h4]:font-semibold [&>h3]:font-bold [&>h3]:text-lg m:[&>h3]:text-xl ">
        <h3>FUNDING YOUR CARE</h3>
        <p>
          Understanding care funding options for you or a loved one can be a
          complex and daunting process. The cost of care is dependent on your
          personal circumstances and, by carrying out a little research and
          utilising resources available to you, your options become clearer and
          easier to understand. When considering your best options for funding
          care the first step is to ensure that all state entitlements are
          explored.
        </p>
        <ul className="list-disc list-inside">
          {[
            "Pension Credits",
            "Saving Credits",
            "Attendance Allowance",
            "Disability Living Allowance I.P’s",
            "Care Allowance",
          ].map((item) => (
            <li key={item} className="font-light text-sm m:text-base">
              {item}
            </li>
          ))}
        </ul>
        <p>
          For further information on all the benefits listed here (as well as
          other benefits) visit the Department of Works and Pensions.
        </p>
        <h3>PUBLIC FUNDING</h3>
        <p>
          You may be eligible to receive help with funding your care from the
          Government. You have the right to request a free care assessment from
          the Social Services Department. This can include a Community Care
          Assessment to see if you are eligible to receive support with the cost
          of your care.
        </p>
        <h3>DIRECT PAYMENTS</h3>
        <p>
          If you have been assessed as needing care services, you may be offered
          direct payments under the new ‘personalisation’ system.
        </p>
        <h3>WHAT IS PERSONALISATION?</h3>
        <p>
          Personalisation is a new system that gives you more choice and control
          over your life and the support you receive. It represents an important
          way of ensuring more people can continue to live independently in
          their own home. Through direct payments, Personalisation offers a new
          way to purchase your services, where and when you want to, using your
          personal budget. Personalisation allows you to know how much money you
          have to spend, lets you choose how to spend the money and ensures you
          receive the support you need.
        </p>
        <h3>CAN I ACCESS DIRECT PAYMENTS?</h3>
        <p>
          For people who need help to stay in their own home, every Local
          Council must now offer money to buy services (direct payments) instead
          of arranging services for them. All Councils must offer direct
          payments to everyone including people who lack mental capacity, which
          means you may be able to help a relative by receiving and managing
          direct payments on his or her behalf. The vast majority of people
          getting Social Services from the Council should be able to receive
          direct payments, including
        </p>
        <ul className="list-disc list-inside">
          {[
            "Older people who have been assessed as needing community care services.",
            "Disabled people aged 16 and over.",
            "Families with disabled children for children’s services.",
            "Disabled parents for children’s services",
          ].map((item) => (
            <li key={item} className="font-light">
              {item}
            </li>
          ))}
        </ul>
        <h4>How do I access direct payments?</h4>
        <p>
          If you decide you want to received direct payments to make your own
          arrangements for the care you require rather than have the Council
          make arrangements for you, the first step is to discuss this with your
          social worker when they assess your care needs. If you are already in
          receipt of services, contact your local council who will have
          established support for people wishing to use direct payment schemes.
        </p>
        <p>
          To access direct payments, you need an assessment in the same way you
          would for any Social Service. If you have not had your needs assessed
          you will need to contact your local council to make arrangements.
        </p>
        <h4>Why would I want direct payments?</h4>
        <p>
          Direct payments allow individuals to make more of the decisions that
          affect their lives. They give flexibility and choice, by enabling
          people of all ages to purchase care for themselves that suit their
          individual needs. Direct payments allow you to decide how your needs
          will be met, by whom and at what time.
        </p>
        <p>
          This information is based on the Department of Health 2009 ‘A guide to
          receiving direct payments which can be viewed online.
        </p>
        <h4>Individual Living Fund</h4>
        <p>
          The Independent Living Fund is funding from the Government to support
          people with disabilities to live independently in their own homes.
          Payments are made to people with disabilities so they can afford the
          costs of a personal assistant or care agency to provide the support
          they need to remain living at home. You can find out more about the
          Independent Living Fund on the Government website.
        </p>
        <h4>Private Funding</h4>
        <p>
          Should you not be eligible for public funding, or would simply prefer
          to fund your care privately, you will need to source your care
          independently. If you need advice on private care funding option,s we
          recommend that you speak with a Financial Advisor who has ‘Care Fee
          Planning’ knowledge and experience.
        </p>
        <h4>A Transparent Charging Structure</h4>
        <p>
          Our working partnerships with Primary Care Trusts and Local
          Authorities have resulted in a charging structure that is transparent
          and offers value for money. Every client has an individually priced
          service and you can expect a full quotation, inclusive of all staffing
          related costs, before the commencement of any care package. If you are
          eligible for funding for your care, including Direct Payments or
          Personal Budgets, we work closely with the Local Authority in order to
          provide the services required within the rate set. If you find you
          need to pay any ‘top up’ fees for additional support services, these
          will be clearly outlined from the outset.
        </p>
      </div>
    </section>
  );
}
