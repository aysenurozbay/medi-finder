import { providerDetails } from "../../features/providers/services/mockProvider";

export const getProviderById = (id: string) =>
  providerDetails.find((p) => p.id === id) ?? null;
