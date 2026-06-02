import { FilterState } from "../features/filters/types";

export type RootStackParamList = {
  Discovery: undefined;
  Profile: {
    providerId: string;
  };
  Filter: {
    initialFilters: FilterState;
    onApply: (filters: FilterState) => void;
  };
};
