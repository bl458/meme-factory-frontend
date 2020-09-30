import { API_URL } from "./constants";

export const fetchImages = async () => {
  const url = `${API_URL}/images`;
  const options = {
    method: "Get",
  };

  try {
    const response = await fetch(url, options);
    console.log("FetchImages:", response.status);
  } catch (err) {
    console.log(err);
  }
};
