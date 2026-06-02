import { ProviderDetail } from "../types/provider";

export const getUniqueCities = (providers: ProviderDetail[]) => {
  return Array.from(new Set(providers.map((p) => p.city)));
};
