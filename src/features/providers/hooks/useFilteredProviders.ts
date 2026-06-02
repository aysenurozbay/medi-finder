import { useMemo } from "react";
import { filterProviders } from "../utils/filterProviders";
import { ProviderDetail } from "../../../shared/types/provider";

type FilterState = {
  search: string;
  city: string | null;
  country: string | null;
  type: string | null;
  minRating: number | null;
};

export function useFilteredProviders(
  providers: ProviderDetail[],
  filters: FilterState,
) {
  const filteredProviders = useMemo(() => {
    return filterProviders(providers, filters);
  }, [providers, filters]);

  return filteredProviders;
}
