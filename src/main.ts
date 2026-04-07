import "./CSS/style.css";
import { addCard } from "./TypeScript/cardeActu";
import { DOM } from "./TypeScript/DOM";
import { readPageButton } from "./TypeScript/nextPageButton";

const nbCardPerPage: number = 15;

DOM("app");
await addCard(nbCardPerPage, 0);
await readPageButton(nbCardPerPage);
