import { ProviderDetail } from "../../../shared/types/provider";

type FilterState = {
  search: string;
  city: string | null;
  country: string | null;
  type: string | null;
  minRating: number | null;
};

export function filterProviders(
  providers: ProviderDetail[],
  filters: FilterState,
) {
  return providers.filter((p) => {
    if (
      filters.search &&
      !p.name.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    if (filters.city && p.city !== filters.city) return false;
    if (filters.country && p.country !== filters.country) return false;
    if (filters.type && p.type !== filters.type) return false;
    if (filters.minRating && p.rating < filters.minRating) return false;

    return true;
  });
}
