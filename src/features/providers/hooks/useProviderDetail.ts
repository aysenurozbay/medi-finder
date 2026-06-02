import { useEffect, useState } from "react";
import { providerDetails } from "../services/mockProvider";
import { ProviderDetail } from "../../../shared/types/provider";
import { getProviderById } from "../../../shared/utils/getProviderById";

export function useProviderDetail(id: string) {
  const [provider, setProvider] = useState<ProviderDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setError(false);

    setTimeout(() => {
      const data = getProviderById(id);

      if (!data) {
        setError(true);
        setProvider(null);
        setLoading(false);
        return;
      }

      setProvider(data);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return {
    provider,
    loading,
    error,
    retry: fetchData,
  };
}
