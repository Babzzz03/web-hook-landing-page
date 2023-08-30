import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "fully open-source project that also offers production-ready SaaS support.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Trusted",
    content:
      "They gain a competitive advantage by embracing extensibility and reversibility.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "Securely Send, Receive and Manage millions of Webhooks Reliably.",
  },
];


export const FAQcontent = [
  {
    id: "question-1",
    icon: star,
    title: "What are Webhooks as a Service?",
    content:
      "We take everything that goes into a webhook service (retries, backoffs, endpoint monitoring, subscriber management, etc) and package it up into a platform that you can easily integrate with using our API.",
  },
  {
    id: "question-2",
    icon: star,
    title: "What are Webhooks as a Service?",
    content:
      "We take everything that goes into a webhook service (retries, backoffs, endpoint monitoring, subscriber management, etc) and package it up into a platform that you can easily integrate with using our API.",
  },
  {
    id: "question-3",
    icon: shield,
    title: "How long does it take to integrate with Flake?",
    content:
      "Zapier is an automation tool that helps connect services together. Flake is a platform that gives your application the ability to send webhook events to your users.",
  },
  {
    id: "question-3",
    icon: send,
    title: "How is this different than Zapier or Integromat?",
    content:
      "Securely Send, Receive and Manage millions of Webhooks Reliably.",
  },
];




export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];


export const PricingData = [
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

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];


export const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};
