import { ProviderType } from "../../features/providers/types";
export const getProviderColor = (type: ProviderType) => {
  switch (type) {
    case "doctor":
      return { backgroundColor: "#E8F3FF" };

    case "clinic":
      return { backgroundColor: "#E9F9EF" };

    case "hospital":
      return { backgroundColor: "#FFF3E0" };
  }
};
