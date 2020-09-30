import { API_URL } from "./constants";

export const fetchImages = async (seed, pageNo) => {
  const url = `${API_URL}/images/feed/${seed}/${pageNo}`;
  const options = {
    method: "Get",
  };

  try {
    const response = await fetch(url, options);
    console.log("FetchImages:", response.status);

    if (response.status === 200) return await response.json();
    else {
      console.log(await response.json());
      return [];
    }
  } catch (err) {
    console.log(err);
    return [];
  }
};
