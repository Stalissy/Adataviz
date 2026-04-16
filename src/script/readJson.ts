const readJson = async (json: string) => {
  try {
    const res = await fetch(`/json/${json}.json`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const completeUrl = async (
  limit: number,
  offset: number,
  search?: string,
) => {
  const objDefaultData: any = await readJson("defaultData");
  let urlApi = objDefaultData.url + `limit=${limit}&offset=${offset}`;

  if (search && search.trim().length > 0) {
    const escaped = search.trim().replace(/"/g, "");
    urlApi += `&where=search(titre_descriptif%2C+"${encodeURIComponent(escaped)}")+OR+search(corps_descriptif%2C+"${encodeURIComponent(escaped)}")`;
  }

  return urlApi;
};
