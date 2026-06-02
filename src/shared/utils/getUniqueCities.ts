import { Provider } from "../../features/providers/types";

export const getUniqueCities = (providers: Provider[]) => {
  return Array.from(new Set(providers.map((p) => p.city)));
};
