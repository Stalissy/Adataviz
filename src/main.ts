import "./style/style.css";
import { addCard } from "./script/cardActu";
import { DOM } from "./script/DOM";
import { readPageButton } from "./script/nextPageButton";
import { searchBarFunction } from "./script/searchBar";

export const nbCardPerPage: number = 20;

DOM("app");
await addCard(nbCardPerPage, 0);
await readPageButton(nbCardPerPage);
searchBarFunction();
