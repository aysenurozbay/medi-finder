import { ProviderType, Specialty } from "../providers/types";

export type FilterState = {
  search: string;
  city: string | null;
  country: string | null;
  minRating: number | null;
  sort: "rating" | "reviews";
  type: ProviderType | null;
  specialty: Specialty | null;
};
