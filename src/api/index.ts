import { BASE_URL, RAPID_API_KEY } from "./constants";

type AbortCtrl = {
  readonly signal: AbortSignal;
  abort: () => void;
};

export const fetchData = (
  endpoint: string,
  controller: AbortCtrl,
  setIsLoading: (a: boolean) => void,
  setData: (a: never[]) => void,
  setIsError: (a: boolean) => void
) => {
  setIsLoading(true);
  fetch(BASE_URL + endpoint, {
    signal: controller.signal,
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
