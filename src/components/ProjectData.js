import ajarnjobs from "../assets/ajarnjobs.png";
import budsCoffee from "../assets/BudsCoffeefront.png";
import cryptoPrices from "../assets/crypto-prices.png";
import expenseTracker from "../assets/expenseTracker.png";
import markdownPreviewer from "../assets/markdownpreview.png";
import Zmirfs from "../assets/SolSmike.png";
import todoApp from "../assets/todo-app.png";

/**Simpler way to store projects
 * Array of ojects
 *
 */
const ProjectData = [
  {
    imgSrc: ajarnjobs,
    title: "Ajarn Jobs",
    text: "Fullstack(MERN) Thai ESL jobs board",
    view: false,
    source: "https://github.com/michaelhunter555/ajarn-jobs",
  },
  {
    imgSrc: budsCoffee,
    title: "Buds Coffee",
    text: "Frontend E-commerce Application for Coffee Shop.",
    view: "https://buds-coffee.vercel.app/",
    source: "https://github.com/michaelhunter555/budsCoffee",
  },
  {
    imgSrc: expenseTracker,
    title: "Expense Tracker",
    text: "Expense tracking app for to visual spending month over month.",
    view: "https://expense-tracker-rose-sigma.vercel.app/",
    source: "https://github.com/michaelhunter555/expense-tracker",
  },
  {
    imgSrc: cryptoPrices,
    title: "crypto Prices API",
    text: "Making use of Coin Gecko API to display top 100 CryptoCurrencies.",
    view: false,
    source: "https://github.com/michaelhunter555/crypto-prices-api",
  },
  {
    imgSrc: todoApp,
    title: "Todo App",
    text: "Simple todo app - create, read, update & delete.",
    view: false,
    source: "https://github.com/michaelhunter555/todo-app",
  },
  {
    imgSrc: markdownPreviewer,
    title: "Markdown Previewer",
    text: "Apart of the FreeCodeCamp FrontEnd Challenges",
    view: false,
    source: "https://github.com/michaelhunter555/markdown-previewer",
  },
  {
    imgSrc: Zmirfs,
    title: "solZmirfs NFTs",
    text: "SolZmirfs is fun loving degenerate smirf who loves Solana.",
    view: false,
    source: "https://github.com/michaelhunter555/solzmirfs",
  },
];

export default ProjectData;
