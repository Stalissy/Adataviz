import "./CSS/style.css";
import { addCard } from "./TypeScript/cardeActu";
import { DOM } from "./TypeScript/DOM";
import { readPageButton } from "./TypeScript/nextPageButton";

DOM("app");
await addCard(9, 0);
await readPageButton();
