import { providerDetails } from "../../features/providers/services/mockProvider";

export const getProviderById = (id: string) => {
  return providerDetails.find((p) => p.id === id);
};
