import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import aap from '../assets/aap.png';
import ajarnjobs from '../assets/ajarnjobs.png';
import budsCoffee from '../assets/BudsCoffeefront.png';
import cryptoPrices from '../assets/crypto-prices.png';
import expenseTracker from '../assets/expenseTracker.png';
import fcc from '../assets/fcc.png';
import todoApp from '../assets/todo-app.png';

/**Simpler way to store projects
 * Array of ojects
 *[{name: 'javaScript', icon: <SiJavaScript />}]
 */

const ProjectData = [
  {
    imgSrc: aap,
    stack: [
      { name: "Nextjs", icon: <TbBrandNextjs size={25} /> },
      {
        name: "TypeScript",
        icon: <SiTypescript style={{ color: "#3178c6" }} />,
      },
      {
        name: "MUI",
        icon: <SiMui style={{ color: "#007fff" }} />,
      },
    ],
    title: "Google Ads Api",
    text: "All my prior years of Google Ads experience at the click of a button. The aim is to allow anyone implement effective, proven campaign structures that are monitored by the app and updated in intervals. -in Progress**!",
    source: "https://github.com/michaelhunter555/google-ads-api",
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
    ],
    title: "AjarnJobs.com",
    text: "Fullstack(MERN) English teaching jobs board site. Create an account as a user or employer, and experience different features. Backend deployed on Heroku, and frontend on Firebase. Tons of other feautures gone over on Youtube.",
    youtube: "https://www.youtube.com/playlist?list=PL9KMyFJi-3vA_ImjreA4DBHyvt7qywbIY",
    view: "https://ajarnjobs.com",
    source: false,
  },
  {
    imgSrc: budsCoffee,
    title: "Buds Coffee",
    stack: [
      {
        name: "React",
        icon: <SiReact style={{ color: "#61DBFB" }} size={20} />,
      },
    ],
    text: "Frontend E-commerce Application for a coffee shop front as an example. Shop brands of coffee, add items to cart, adjust your cart items, increase and decrease quantities, and more. Light and fun app for e-commerce development. ",
    view: "https://buds-coffee.vercel.app/",
    source: "https://github.com/michaelhunter555/budsCoffee",
  },
  {
    imgSrc: expenseTracker,
    title: "Expense Tracker",
    stack: [
      {
        name: "React",
        icon: <SiReact style={{ color: "#61DBFB" }} size={20} />,
      },
    ],
    text: "Expense tracking app for to visual spending month over month.",
    view: "https://expense-tracker-rose-sigma.vercel.app/",
    source: "https://github.com/michaelhunter555/expense-tracker",
  },
  {
    imgSrc: cryptoPrices,
    title: "crypto Prices API",
    stack: [
      {
        name: "React",
        icon: <SiReact style={{ color: "#61DBFB" }} size={20} />,
      },
    ],
    text: "Making use of Coin Gecko API to display top 100 CryptoCurrencies.",
    view: false,
    source: "https://github.com/michaelhunter555/crypto-prices-api",
  },
  {
    imgSrc: todoApp,
    title: "Todo App",
    stack: [
      {
        name: "React",
        icon: <SiReact style={{ color: "#61DBFB" }} size={20} />,
      },
    ],
    text: "Todo App Version #52,320,322. I love to code, so try everything.",
    view: false,
    source: "https://github.com/michaelhunter555/todo-app",
  },
  {
    imgSrc: fcc,
    title: "FCC Frontend Projects",
    stack: [
      {
        name: "React",
        icon: <SiReact style={{ color: "#61DBFB" }} size={20} />,
      },
    ],
    text: "A part of the FreeCodeCamp FrontEnd Challenges. Codepen link available for each completed project.",
    view: false,
    source: "https://github.com/michaelhunter555/fcc-projects",
  },
];

export default ProjectData;
