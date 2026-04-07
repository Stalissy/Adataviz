const readJson = async (json: string) => {
  try {
    const res = await fetch(`/json/${json}.json`); // <== note le slash /
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const completeUrl = async (limit: number, offset: number) => {
  const objDefaultData: any = await readJson("defaultData");
  let urlApi = objDefaultData.url + `limit=${limit}&offset=${offset}`;
  return urlApi;
};
