import budsCoffee from '../assets/BudsCoffeefront.png';
import cryptoPrices from '../assets/crypto-prices.png';
import expenseTracker from '../assets/expenseTracker.png';
import markdownPreviewer from '../assets/markdownpreview.png';
import Zmirfs from '../assets/SolSmike.png';
import todoApp from '../assets/todo-app.png';

/**Simpler way to store projects
 * Array of ojects
 *
 */
const ProjectData = [
  {
    imgSrc: budsCoffee,
    title: "Buds Coffee",
    text: "Frontend E-commerce Application for Coffee Shop.",
    view: "https://buds-coffee.vercel.app/",
    source: "https://github.com/idioticbrilliance/budsCoffee",
  },
  {
    imgSrc: expenseTracker,
    title: "Expense Tracker",
    text: "Expense tracking app for to visual spending month over month.",
    view: "https://expense-tracker-rose-sigma.vercel.app/",
    source: "https://github.com/idioticbrilliance/expense-tracker",
  },
  {
    imgSrc: cryptoPrices,
    title: "crypto Prices API",
    text: "Making use of Coin Gecko API to display top 100 CryptoCurrencies.",
    view: false,
    source: "https://github.com/idioticbrilliance/crypto-prices-api",
  },
  {
    imgSrc: todoApp,
    title: "Todo App",
    text: "Simple todo app - create, read, update & delete.",
    view: false,
    source: "https://github.com/idioticbrilliance/todo-app",
  },
  {
    imgSrc: markdownPreviewer,
    title: "Markdown Previewer",
    text: "Apart of the FreeCodeCamp FrontEnd Challenges",
    view: false,
    source: "https://github.com/idioticbrilliance/markdown-previewer",
  },
  {
    imgSrc: Zmirfs,
    title: "solZmirfs NFTs",
    text: "SolZmirfs is fun loving degenerate smirf who loves Solana.",
    view: false,
    source: "https://www.github.com",
  },
];

export default ProjectData;
