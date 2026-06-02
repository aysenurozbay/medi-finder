import { FilterState } from "../shared/types/filter";

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
