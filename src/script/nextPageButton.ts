import { addCard } from "./cardeActu";

const nextPage = async (pageNumber: number, nbCardPerPage: number) => {
  await addCard(nbCardPerPage, pageNumber + 1);
};

const previousPage = async (pageNumber: number, nbCardPerPage: number) => {
  await addCard(nbCardPerPage, pageNumber - 1);
};

export const readPageButton = async (nbCardPerPage: number) => {
  let pageNumber: number = 0;

  const previousPageButton: any = document.getElementById("previousPageButton");

  previousPageButton.addEventListener("click", () => {
    if (pageNumber > 0) {
      previousPage(pageNumber, nbCardPerPage);
      pageNumber--;
    }
    console.log(pageNumber);
  });

  const nextPageButton: any = document.getElementById("nextPageButton");
  nextPageButton.addEventListener("click", () => {
    nextPage(pageNumber, nbCardPerPage);
    pageNumber++;
    console.log(pageNumber);
  });
};
