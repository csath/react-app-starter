import { apiRoot } from "../../settings/api.settings";

export const getDemoContent = () =>
  fetch(`${apiRoot}/demo`).then(() => res.json());
