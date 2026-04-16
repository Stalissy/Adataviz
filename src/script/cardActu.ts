import { readAPI } from "./readAPI";
import { openModal } from "./modal";
import { nbCardPerPage } from "../main";

export let nbPage: number;

export const extracNews = async (
  limit: number,
  offset: number,
  search?: string,
) => {
  const jsonApi: any = await readAPI(limit, offset, search);

  nbPage = Math.ceil(jsonApi.total_count / nbCardPerPage);

  return jsonApi.results;
};

const creatCard = (obj: any) => {
  const title: string = obj.titre_descriptif;
  const corp: string = obj.corps_descriptif;
  const type: string = obj.categorie;
  const newId: string = title.replace(/ /g, "_");

  const htmlArticle: any = document.getElementById("article");
  const section = document.createElement("section");
  section.id = newId;
  section.className = `card ${type}`;

  section.innerHTML = `
    <div class="title">${title}</div>
    <div class="corp max_line">${corp}</div>
    <button class="button outline see-more">Voir plus</button>
  `;

  // Attache l'objet complet au bouton pour la modale
  const btn = section.querySelector(".see-more")!;
  btn.addEventListener("click", () => openModal(obj));

  htmlArticle.appendChild(section);
};

export const addCard = async (
  limit: number,
  offset: number,
  search?: string,
) => {
  const jsonAPI: any = await extracNews(limit, offset, search);
  const htmlArticle: any = document.getElementById("article");

  htmlArticle.innerHTML = "";

  jsonAPI.forEach((info: any) => {
    creatCard(info);
  });

  if (htmlArticle.innerHTML == "") {
    htmlArticle.innerHTML = `<p id="no_result" class="corp"}>Aucun résultats</p>`;
  }
};
