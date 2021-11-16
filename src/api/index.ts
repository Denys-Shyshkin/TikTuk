import { BASE_URL, RAPID_API_KEY } from "./constants";

export const fetchData = (
  endpoint: any,
  setIsLoading: any,
  setData: any,
  setIsError: any
) => {
  setIsLoading(true);
  fetch(BASE_URL + endpoint, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "tiktok33.p.rapidapi.com",
      "x-rapidapi-key": RAPID_API_KEY,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setData(data);
    })
    .catch(() => {
      setIsLoading(false);
      setIsError(true);
    });
};
