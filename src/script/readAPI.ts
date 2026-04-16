import { completeUrl } from "./readJson";
import { nbCardPerPage } from "../main";

export let totalElement: number;

/**
 * @param limit Nombre d'éléments à charger dans une page
 * @param offset Élément de départ
 * @param search Texte de recherche (optionnel, filtré côté API)
 */
export const readAPI = async (
  limit: number,
  offset: number,
  search?: string,
) => {
  const url: string = await completeUrl(limit, offset * nbCardPerPage, search);

  const varFetch: Response = await fetch(url);
  const jsonFetch: any = await varFetch.json();

  totalElement = jsonFetch.total_count;

  return jsonFetch;
};
