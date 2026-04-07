import "./style/style.css";
import { addCard } from "./script/cardeActu";
import { DOM } from "./script/DOM";
import { readPageButton } from "./script/nextPageButton";

const nbCardPerPage: number = 12;

DOM("app");
await addCard(nbCardPerPage, 0);
await readPageButton(nbCardPerPage);
