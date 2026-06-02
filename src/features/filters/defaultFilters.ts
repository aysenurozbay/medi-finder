import { FilterState } from "./types";

export const DEFAULT_FILTERS: FilterState = {
  search: "",
  city: null,
  country: null,
  minRating: null,
  sort: "rating",
  type: null,
  specialty: null,
};
