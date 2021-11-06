import { apiFetch } from "./api_fetcher.js";

export const CategoriesFetcher = (function () {
  return {
    index: (token) =>
      apiFetch("categories", "GET", {
        Authorization: `Token token=${token}`,
      }),
    show: (token, productId) =>
      apiFetch(`categories/${productId}`, "GET", {
        Authorization: `Token token=${token}`,
      }),
  };
})();
