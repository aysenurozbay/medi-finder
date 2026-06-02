import { providers } from "../../features/providers/services/mock/providerData";

export const getProviderById = (id: string) =>
  providers.find((p) => p.id === id) ?? null;
