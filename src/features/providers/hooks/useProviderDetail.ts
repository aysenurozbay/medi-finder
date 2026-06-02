import { useEffect, useState } from "react";
import { providerDetails } from "../services/mockProvider";
import { ProviderDetail } from "../../../shared/types/provider";

export function useProviderDetail(id: string) {
  const [provider, setProvider] = useState<ProviderDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const data = providerDetails.find((provider) => provider.id === id);

      setProvider(data ?? null);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [id]);

  return { provider, loading };
}
