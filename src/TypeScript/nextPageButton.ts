import { addCard } from "./cardeActu";

const nextPage = async (pageNumber: number) => {
  await addCard(9, pageNumber + 1);
};

const previousPage = async (pageNumber: number) => {
  await addCard(9, pageNumber - 1);
};

export const readPageButton = async () => {
  let pageNumber: number = 0;

  const previousPageButton: any = document.getElementById("previousPageButton");
  previousPageButton.addEventListener("click", () => {
    previousPage(pageNumber);
    pageNumber--;
  });

  const nextPageButton: any = document.getElementById("nextPageButton");
  nextPageButton.addEventListener("click", () => {
    nextPage(pageNumber);
    pageNumber++;
    console.log(pageNumber);
  });
};
