import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import aap from "../assets/aap.png";
import ajarnjobs from "../assets/ajarnjobs.png";
import budsCoffee from "../assets/BudsCoffeefront.png";
import cryptoPrices from "../assets/crypto-prices.png";
import expenseTracker from "../assets/expenseTracker.png";
import markdownPreviewer from "../assets/markdownpreview.png";
import todoApp from "../assets/todo-app.png";

/**Simpler way to store projects
 * Array of ojects
 *[{name: 'javaScript', icon: <SiJavaScript />}]
 */
const ProjectData = [
  {
    imgSrc: aap,
    stack: [
      <TbBrandNextjs size={25} />,
      <SiTypescript style={{ color: "#3178c6" }} />,
    ],
    title: "Google Ads Api",
    text: "All my prior years of Google Ads experience at the click of a button. The aim is to allow anyone implement effective, proven campaign structures that are monitored by the app and updated in intervals. -ACTIVE PROJECT*",
    source: "https://github.com/michaelhunter555/google-ads-api",
  },
  {
    imgSrc: ajarnjobs,
    stack: [
      <SiReact style={{ color: "#61DBFB" }} size={20} />,
      <SiExpress style={{ color: "#999" }} size={20} />,
      <SiNodedotjs style={{ color: "#3C873A" }} size={20} />,
      <SiMongodb style={{ color: "#3FA037" }} size={20} />,
    ],
    title: "AjarnJobs.com",
    text: "Fullstack(MERN) English teaching jobs board site. Create an account as a user or employer, and experience different features. Backend deployed on Heroku, and frontend on Firebase. Tons of other feautres gone over in the Youtube video.",
    youtube: "https://youtu.be/sfnUQmcMp7w",
    view: "https://ajarnjobs.com",
    source: "https://github.com/michaelhunter555/ajarn-jobs",
  },
  {
    imgSrc: budsCoffee,
    title: "Buds Coffee",
    stack: [<SiReact style={{ color: "#61DBFB" }} size={20} />],
    text: "Frontend E-commerce Application for a coffee shop front as an example. Shop brands of coffee, add items to card, adjust your cart items, increase and decrease quantities, and more. ",
    view: "https://buds-coffee.vercel.app/",
    source: "https://github.com/michaelhunter555/budsCoffee",
  },
  {
    imgSrc: expenseTracker,
    title: "Expense Tracker",
    stack: [<SiReact style={{ color: "#61DBFB" }} size={20} />],
    text: "Expense tracking app for to visual spending month over month.",
    view: "https://expense-tracker-rose-sigma.vercel.app/",
    source: "https://github.com/michaelhunter555/expense-tracker",
  },
  {
    imgSrc: cryptoPrices,
    title: "crypto Prices API",
    stack: [<SiReact style={{ color: "#61DBFB" }} size={20} />],
    text: "Making use of Coin Gecko API to display top 100 CryptoCurrencies.",
    view: false,
    source: "https://github.com/michaelhunter555/crypto-prices-api",
  },
  {
    imgSrc: todoApp,
    title: "Todo App",
    stack: [<SiReact style={{ color: "#61DBFB" }} size={20} />],
    text: "Todo App Version #52,320,322. I love to code, so try everything.",
    view: false,
    source: "https://github.com/michaelhunter555/todo-app",
  },
  {
    imgSrc: markdownPreviewer,
    title: "Markdown Previewer",
    stack: [<SiReact style={{ color: "#61DBFB" }} size={20} />],
    text: "Apart of the FreeCodeCamp FrontEnd Challenges",
    view: false,
    source: "https://github.com/michaelhunter555/markdown-previewer",
  },
];

export default ProjectData;
