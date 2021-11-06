import { apiFetch } from "./api_fetcher.js";

export const CategoriesFetcher = (function () {
  return {
    index: (token) =>
      apiFetch("categories", "GET", {
        Authorization: `Token token=${token}`,
      }),
    delete: (token, categoryId) =>
      apiFetch(`categories/${categoryId}`, "DELETE", {
        Authorization: `Token token=${token}`,
      }),
  };
})();
