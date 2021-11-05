import { apiFetch } from "./api_fetcher.js";

export const SessionFetcher = (function () {
  return {
    login: (email, password) =>
      apiFetch(
        "login",
        "POST",
        { "Content-Type": "application/json" },
        { email, password }
      ),
    logout: (token) =>
      apiFetch("logout", "DELETE", {
        Authorization: `Token token=${token}`,
      }),
  };
})();
