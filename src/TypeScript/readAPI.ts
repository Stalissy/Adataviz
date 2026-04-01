import { completeUrl } from "./readJson";

/**
 *
 * @param limit Nombre d'éllément à chargée dans une page
 * @param offset Ellement de départ
 */
export const readAPI = async (limit: number, offset: number) => {
  const url: string = await completeUrl(limit, offset);

  const varFetch: Response = await fetch(url);
  const jsonFetch: any = await varFetch.json();

  return jsonFetch;
};
