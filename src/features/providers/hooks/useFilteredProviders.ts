import { useMemo } from "react";
import { filterProviders } from "../utils/filterProviders";
import { ProviderDetail } from "../../../shared/types/provider";
import { FilterState } from "../../filters/types";

export function useFilteredProviders(
  providers: ProviderDetail[],
  filters: FilterState,
) {
  const filteredProviders = useMemo(() => {
    return filterProviders(providers, filters);
  }, [providers, filters]);

  return filteredProviders;
}
