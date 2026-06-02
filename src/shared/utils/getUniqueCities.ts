import { ProviderSummary } from "../../features/providers/types";

export const getUniqueCities = (providers: ProviderSummary[]) => {
  return Array.from(new Set(providers.map((p) => p.city)));
};
