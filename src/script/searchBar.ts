import { addCard } from "./cardActu";
import { nbCardPerPage } from "../main";
import { displayButton } from "./nextPageButton";
import { pageIndex } from "./nextPageButton";

export let reserchText: string = "";

export const searchBarFunction = () => {
  const searchBar = document.getElementById(
    "search",
  ) as HTMLInputElement | null;

  let debounceTimer: ReturnType<typeof setTimeout>;

  searchBar?.addEventListener("input", (event: Event) => {
    const input = event.target as HTMLInputElement;
    reserchText = input.value.trim();

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(async () => {
      // Remet la pagination à 0 et charge les résultats filtrés via l'API
      await addCard(
        nbCardPerPage,
        0,
        reserchText.length > 0 ? reserchText : undefined,
      );
      const btnActualPage = document.getElementById(
        "actual-page",
      ) as HTMLButtonElement;
      btnActualPage?.click();
      console.log("feur");
    }, 200); // 350ms après la dernière frappe
  });
};
