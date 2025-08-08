import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import graph from "../assets/skills/graphql.png";
import mongo from "../assets/skills/mongodb.png";
import figma from "../assets/skills/figma.png";
import vite from "../assets/skills/Vitejs-logo.svg.png";
import nextjs from "../assets/skills/nextjs.png";
import supabase from "../assets/skills/supabase-logo-icon.png";
import github from "../assets/skills/github.webp";

import google from "../assets/history/google.png";
import microsoft from "../assets/history/microsoft.png";
import netflix from "../assets/history/netflix.png";

import project from "../assets/styledbymexy.png";
import project2 from "../assets/cocknbull.png";
import project3 from "../assets/project.png";

export const skills = [
  {
    title: "HTML",
    imageSrc: html,
  },
  {
    title: "CSS",
    imageSrc: css,
  },
  {
    title: "React",
    imageSrc: react,
  },
  {
    title: "Node",
    imageSrc: node,
  },
  {
    title: "GraphQL",
    imageSrc: graph,
  },
  {
    title: "MongoDB",
    imageSrc: mongo,
  },
  {
    title: "Figma",
    imageSrc: figma,
  },{
    title: "vite",
    imageSrc: vite, 
  },{
    title: "Next.js",
    imageSrc: nextjs,
  },{
    title: "Supabase",
    imageSrc: supabase,
  },{
    title: "GitHub",
    imageSrc: github,
  }
];

export const history = [
  {
    role: "Software Engineer",
    organisation: "Google",
    startDate: "Sept, 2022",
    endDate: "Present",
    experiences: ["Worked on Google Maps", "Reduced load times by 50%"],
    imageSrc: google,
  },
  {
    role: "UI Designer",
    organisation: "Mirosoft",
    startDate: "Aug, 2021",
    endDate: "Aug, 2022",
    experiences: ["Worked on Windows 10", "Designed the control panel"],
    imageSrc: microsoft,
  },
  {
    role: "SWE Intern",
    organisation: "Netflix",
    startDate: "Apr, 2020",
    endDate: "Jun, 2020",
    experiences: ["Worked on component library", "Helped create UI components"],
    imageSrc: netflix,
  },
];

export const projects = [
  {
    id: 1,
    title: "Styledbymexy",
    imageSrc: project,
    description:
      "project was made to let users/customers book a photography sessions. Users select available time, book and make payment.",
    skills: ["React", "Vite", "Node", "Typescript","Tailwind CSS", "PostgreSQL", "Supabase"],
    demo: "https://bookwithmexy.netlify.app/",
    source: "https://github.com/Maxine001/mexybookings",
  },
  {
    id: 2,
    title: "Cocknbull ",
    imageSrc: project2,
    description:
      "Website for a coin project, it allows users to view live chart,token meta data like marketcap, volume. users can connect their wallets to view their holdings and also buy the token.",
    skills: ["React js", "vite", "web3.js", "wagmi", "WalletConnect", "Phantom (Solana)"],
    demo: "https://cocknbull.xyz/",
    source: "https://github.com/Maxine001/cockbull",
  },
  { 
    id: 3,
    title: "Starz Coin",
    imageSrc: project3,
    description:
      "pending...........",
    skills: ["React", "Express", "Node"],
    demo: "https://www.example.com",
    source: "https://www.github.com",
  },
];
