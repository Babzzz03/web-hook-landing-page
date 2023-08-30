import React from "react";
import styles, { layout } from "../style";
import PricingCard from "./PricingCard";

const PricingData = [
  {
    title: "Developer",
    descr:
      "Perfect way to try out Flask, no need to setup onpremiseing, free forever for side-projects.",
    plan: "FREE",
    planDuration: "Forever",
    CTAct: "Sign Up",
    CTALink: "#",
    whatIncluded: [
      { Char1: "Fully managed, no infra. to own" },
      { Char1: "1 developer" },
      { Char1: "1 application" },
      { Char1: "Up to 100 events per day" },
      { Char1: "7 days data retention" },
    ],
  },
  {
    title: "Pro",
    descr:
      "Unleash your data connectivity along with enterprise features and better support.",
    plan: "€190",
    planDuration: "/month",
    CTAct: "Subscribe",
    CTALink: "#",
    whatIncluded: [
      { Char1: "Fully managed, no infra. to own" },
      { Char1: "Unlimited developers" },
      { Char1: "Unlimited applications" },
      { Char1: "Up to 100,000 events per day" },
      { Char1: "30 days data retention" },
    ],
  },
  {
    title: "Enterprise",
    descr:
      "You need more? You need different? Let us know and we will build a custom plan just for you.",
    plan: "Custom",
    planDuration: " /month(or year)",
    CTAct: "Contact Us",
    CTALink: "#",
    whatIncluded: [
      { Char1: "Fully managed, no infra. to own" },
    
      { Char1: "Unlimited developers" },
      { Char1: "Unlimited applications" },
      { Char1: "Custom requirements" },
     

    ],
  },
];

const Pricing = () => {
  return (
    <div className={`${styles.flexCenter} flex-col  `}>
      <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
        Flask Pricing.
      </h2>
      <p className={`${styles.paragraph}   `}>
        Choose the plan that's right for you, and start sending webhooks now
      </p>
      <div className={`${layout.section}  flex-wrap w-full justify-between `}>
        {PricingData.map((data, i) => (
          <PricingCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
