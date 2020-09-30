import { API_URL } from "./constants";

export const fetchImages = async (seed, pageNo) => {
  const url = `${API_URL}/images/feed/${seed}/${pageNo}`;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    console.log(
      `FetchImages seed ${seed}, pageNo ${pageNo}:, ${response.status}`
    );

    const responseJson = await response.json();
    console.log("FetchImages result", responseJson);

    if (response.status === 200) {
      return responseJson;
    }

    return [];
  } catch (err) {
    console.log(err);
    return [];
  }
};
