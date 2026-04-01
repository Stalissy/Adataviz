import { readAPI } from "./readAPI";

export const extracNews = async (limit: number, offset: number) => {
  const jsonApi: any = await readAPI(limit, offset);

  return jsonApi.results;
};

const creatCard = (obj: any) => {
  const title: string = obj.titre_descriptif;
  const corp: string = obj.corps_descriptif;
  const type: string = obj.categorie;
  const newId: string = title.replace(" ", "_");
  const newTitleId: string = newId + "_title";
  const newCorpId: string = newId + "_corp";

  const htmlMain: any = document.getElementById("main");
  htmlMain.innerHTML += `
    <section id="${newId}" class="card ${type}">
      <div id="${newTitleId}" class="title">${title}</div>
      <div id="${newCorpId}" class="corp">${corp}</div>
    </section>
  `;
};

export const addCard = async (limit: number, offset: number) => {
  const jsonAPI: any = await extracNews(limit, offset);

  jsonAPI.forEach((info: any) => {
    creatCard(info);
  });
};
