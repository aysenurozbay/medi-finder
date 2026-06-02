export type ProviderType = "doctor" | "clinic" | "hospital";

export type Specialty =
  | "general"
  | "cardiology"
  | "neurology"
  | "orthopedics"
  | "pediatrics"
  | "dermatology";

export type ProviderSummary = {
  id: string;
  name: string;
  type: ProviderType;
  specialty: Specialty;
  city: string;
  country: string;
  rating: number;
};
