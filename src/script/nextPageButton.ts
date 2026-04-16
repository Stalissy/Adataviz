import { addCard, nbPage } from "./cardActu";
import { reserchText } from "./searchBar";

const nextPage = async (
  pageIndex: number,
  nbCardPerPage: number,
  addPage: number,
): Promise<number> => {
  const newPageIndex = pageIndex + addPage;
  await addCard(nbCardPerPage, newPageIndex, reserchText);
  return newPageIndex;
};

export let pageIndex = 0; // 👈 interne (0 = page 1 affichée)

export const readPageButton = (nbCardPerPage: number): void => {
  const previousPageButton = document.getElementById("previousPageButton");
  const nextPageButton = document.getElementById("nextPageButton");

  if (!previousPageButton || !nextPageButton) return;

  goToPage(nbCardPerPage, (newIndex) => {
    pageIndex = newIndex;
  });

  previousPageButton.addEventListener("click", async () => {
    if (pageIndex > 0) {
      pageIndex = await nextPage(pageIndex, nbCardPerPage, -1);
      displayButton(pageIndex);
    }
  });

  nextPageButton.addEventListener("click", async () => {
    pageIndex = await nextPage(pageIndex, nbCardPerPage, 1);
    displayButton(pageIndex);
  });

  // Initialisation affichage
  displayButton(pageIndex);
};

export const displayButton = (pageIndex: number): void => {
  const previousPage = document.getElementById("previousPageButton");
  const pageMinus2 = document.getElementById("page-2");
  const pageMinus1 = document.getElementById("page-1");
  const pagePlus2 = document.getElementById("page+2");
  const pagePlus1 = document.getElementById("page+1");
  const returnPpage = document.getElementById("return-page-1");
  const btnNextPage = document.getElementById("nextPageButton");

  if (
    !previousPage ||
    !pageMinus2 ||
    !pageMinus1 ||
    !returnPpage ||
    !pagePlus1 ||
    !pagePlus2 ||
    !btnNextPage
  )
    return;

  const buttons = [
    document.getElementById("page-2"),
    document.getElementById("page-1"),
    document.getElementById("actual-page"),
    document.getElementById("page+1"),
    document.getElementById("page+2"),
  ].filter((el): el is HTMLElement => el !== null);

  buttons.forEach((button, index) => {
    const offset = index - 2; // -2, -1, 0, +1, +2
    const displayPage = pageIndex + offset + 1; // 👈 +1 pour UI

    button.textContent = displayPage > 0 ? String(displayPage) : "";
    button.style.display = displayPage > 0 ? "" : "none";
  });

  // Affichage boutons précédent
  previousPage.style.display = pageIndex > 0 ? "" : "none";
  pageMinus1.style.display = pageIndex > 0 ? "" : "none";
  pageMinus2.style.display = pageIndex > 1 ? "" : "none";
  returnPpage.style.display = pageIndex > 2 ? "" : "none";
  pagePlus1.style.display = pageIndex < nbPage - 1 ? "" : "none";
  pagePlus2.style.display = pageIndex < nbPage - 2 ? "" : "none";
  btnNextPage.style.display = pageIndex < nbPage - 1 ? "" : "none";
};

const goToPage = (
  nbCardPerPage: number,
  updatePage: (pageIndex: number) => void,
): void => {
  const ids = ["page-2", "page-1", "actual-page", "page+1", "page+2"];

  const buttons = ids
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null);

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const displayPage = Number(button.textContent);
      if (isNaN(displayPage) || displayPage <= 0) return;

      const pageIndex = displayPage - 1; // 👈 conversion UI → logique
      console.log(reserchText);
      await addCard(nbCardPerPage, pageIndex, reserchText);
      updatePage(pageIndex);
      displayButton(pageIndex);
    });
  });

  document
    .getElementById("return-page-1")
    ?.addEventListener("click", async () => {
      await addCard(nbCardPerPage, 0, reserchText);
      updatePage(0);
      displayButton(0);
    });
};
