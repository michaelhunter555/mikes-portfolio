import { FaStripe } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiExpo
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import ajarnjobs from "../assets/ajarnjobs_dash.png";
import queryLevel from "../assets/create-tiers-light.svg";
import barberApp from '../assets/barber_app_home_phones.png'
import nextFade from '../assets/nextfade.png'

/**Simpler way to store projects
 * Array of ojects
 *[{name: 'javaScript', icon: <SiJavaScript />}]
 */

const ProjectData = [
  {
    imgSrc: nextFade,
    stack: [
      {
        name: "Expo",
        icon: <SiExpo size={20} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript style={{ color: "#3178c6" }} />,
      },
      {
        name: "Express",
        icon: <SiExpress style={{ color: "#999" }} size={20} />,
      },
      {
        name: "Nodejs",
        icon: <SiNodedotjs style={{ color: "#3C873A" }} size={20} />,
      },
      {
        name: "MongoDb",
        icon: <SiMongodb style={{ color: "#3FA037" }} size={20} />,
      },
      {
        name: "Stripe",
        icon: <FaStripe style={{ color: "#6B71E3" }} size={30} />,
      },
    ],
    title: "Next Fade - Barber App Marketplace",
    height: 600,
    text: "Android & iOS App<br/><h4>Key Features</h4><ul><li><strong>Find Local Barbers</strong> - Discover licensed barbers and stylists near you using interactive maps and location-based search</li><li><strong>Book Appointments</strong> - Schedule haircuts with real-time availability, add-on services, and flexible payment options</li><li><strong>House Call Services</strong> - Book barbers for in-home visits with distance-based pricing and location tracking</li><li><strong>Coupon & Rewards System</strong> - Earn points from completed appointments to purchase app-level discounts and barber-specific coupons</li><li><strong>Secure Payments</strong> - Integrated Stripe payments with multiple payment methods, tips, and automatic fee calculations</li><li><strong>Review & Rating System</strong> - Rate barbers on cleanliness, punctuality, and overall experience with photo uploads</li><li><strong>Real-time Messaging</strong> - Direct communication between clients and barbers with support chat functionality</li><li><strong>Barber Dashboard</strong> - Providers manage schedules, view earnings, track performance, and handle booking confirmations</li><li>iOS & Google Maps for Nearby barber discovery via geo search</li><li>Stripe subscriptions, payouts, invoices</li><li>In-app chat, bookings, notifications</li></ul>",
    source: false,
    ios: "https://apps.apple.com/us/app/next-fade/id6755074770",
    android: "https://play.google.com/store/apps/details?id=com.anonymous.bmorebarber",
  },
  {
    imgSrc: queryLevel,
    stack: [
      { name: "Nextjs", icon: <TbBrandNextjs size={25} /> },
      {
        name: "TypeScript",
        icon: <SiTypescript style={{ color: "#3178c6" }} />,
      },
      {
        name: "Express",
        icon: <SiExpress style={{ color: "#999" }} size={20} />,
      },
      {
        name: "MongoDb",
        icon: <SiMongodb style={{ color: "#3FA037" }} size={20} />,
      },
      {
        name: "MUI",
        icon: <SiMui style={{ color: "#007fff" }} />,
      },
      {
        name: "Stripe",
        icon: <FaStripe style={{ color: "#6B71E3" }} size={30} />,
      },
    ],
    title: "QueryLevel.com",
    text: "*Production Approved* <br /> <h4>Purpose</h4> Query Level is a Google Shopping Ads app targeting e-commerce vendors. As an e-commerce vendor in the past, I came across a very powerful marketing strategy that required a series of steps in structuring your Google Shopping campaigns.<br /> <h4> The strategy </h4> The strategy creates a filter-like system that allows you to bid high on buy-phase keywords and low on interest-level queries. <br /> <h4> The Problem </h4>The problem with the strategy is it requires you to create negative keywords and carefully structure your campaigns. One mistake and you could be seeing some unusual or unintended performance. Moreover, if you have hundreds of products for each brand you carry, the manual work of creating negative keywords within the constraints of Google is painstaking and long. <br /> <h4> The Solution </h4>This app solves all of that in a few clicks. Users can simply connect to the app, choose the brand they want to create the structured campaigns for, configure some specific settings like cost per click, location and bid separations, and click 'create campaigns' and they're done. This app provides a centralized Google ads Shopping experience. App is CRUD equipped for shopping campaigns, conversions, search terms, and Stripe for subscriptions.",

    view: "https://github.com/michaelhunter555/querylevel-backend",
    source: " https://github.com/michaelhunter555/querylevel-frontend"
  },
  {
    imgSrc: ajarnjobs,
    stack: [
      {
        name: "React",
        icon: <SiReact style={{ color: "#61DBFB" }} size={20} />,
      },
      {
        name: "Express",
        icon: <SiExpress style={{ color: "#999" }} size={20} />,
      },
      {
        name: "Nodejs",
        icon: <SiNodedotjs style={{ color: "#3C873A" }} size={20} />,
      },
      {
        name: "MongoDb",
        icon: <SiMongodb style={{ color: "#3FA037" }} size={20} />,
      },
      {
        name: "MUI",
        icon: <SiMui style={{ color: "#007fff" }} />,
      },
      {
        name: "Stripe",
        icon: <FaStripe style={{ color: "#6B71E3" }} size={30} />,
      },
    ],
    title: "AjarnJobs.com",
    text: "<h4>Desire to build something meaningful</h4> While working at an international University in Thailand, I had been thinking for a few days what kind of project I could build that would be both unique in its intention and relatable to my profession as a lecturer as well as my transitioning into becoming a developer. <h4>jobs for teachers</h4> Ajarn jobs is a English teaching jobs board that takes a very niche angle aiming to focus only on English teaching jobs. <h4>How it works</h4> There are two types of users, Teachers and Employers, which based offer two very different dashboard experience as well as app experience. <h5>Teachers</h5> Teachers can create profiles, build resumes, apply to jobs, (CRUD) manage their applications, post and interact with content, and respond to recruitment offers. <h5>Employers</h5> Employers can (CRUD) manage jobs & featured jobs, recruitments, applicants, content, view teacher profiles, purchase credits to create jobs and teacher-buffets. Teacher buffets are timed segments where employers can view all currently active teachers and recruit them to apply for open positions. Once the window is closed, access is locked off. Employers can purchase segments of 24 hours, 7 days, 14 days and 1 month. The hope here is that it becomes easier for others to find a job and not rely on the few options out there at the moment. <h4>Solutions</h4> Ajarn jobs offers variety in the job finding hustle and gives employers on budget an affordable posting option.",

    view: "https://ajarnjobs.com",
    source: false,
  },
  // {
  //   imgSrc: budsCoffee,
  //   title: "Buds Coffee",
  //   stack: [
  //     {
  //       name: "React",
  //       icon: <SiReact style={{ color: "#61DBFB" }} size={20} />,
  //     },
  //   ],
  //   text: "Frontend E-commerce Application for a coffee shop front as an example. Shop brands of coffee, add items to cart, adjust your cart items, increase and decrease quantities, and more. Light and fun app for e-commerce development. ",

  //   source: "https://github.com/michaelhunter555/budsCoffee",
  // },
  // {
  //   imgSrc: expenseTracker,
  //   title: "Expense Tracker",
  //   stack: [
  //     {
  //       name: "React",
  //       icon: <SiReact style={{ color: "#61DBFB" }} size={20} />,
  //     },
  //   ],
  //   text: "Expense tracking app for to visual spending month over month.",

  //   source: "https://github.com/michaelhunter555/expense-tracker",
  // },
  // {
  //   imgSrc: cryptoPrices,
  //   title: "crypto Prices API",
  //   stack: [
  //     {
  //       name: "React",
  //       icon: <SiReact style={{ color: "#61DBFB" }} size={20} />,
  //     },
  //   ],
  //   text: "Making use of Coin Gecko API to display top 100 CryptoCurrencies.",
  //   view: false,
  //   source: "https://github.com/michaelhunter555/crypto-prices-api",
  // },
  // {
  //   imgSrc: todoApp,
  //   title: "Todo App",
  //   stack: [
  //     {
  //       name: "React",
  //       icon: <SiReact style={{ color: "#61DBFB" }} size={20} />,
  //     },
  //   ],
  //   text: "Todo App Version #52,320,322. I love to code, so try everything.",
  //   view: false,
  //   source: "https://github.com/michaelhunter555/todo-app",
  // },
  // {
  //   imgSrc: fcc,
  //   title: "FCC Frontend Projects",
  //   stack: [
  //     {
  //       name: "React",
  //       icon: <SiReact style={{ color: "#61DBFB" }} size={20} />,
  //     },
  //   ],
  //   text: "A part of the FreeCodeCamp FrontEnd Challenges. Codepen link available for each completed project.",
  //   view: false,
  //   source: "https://github.com/michaelhunter555/fcc-projects",
  // },
];

export default ProjectData;
