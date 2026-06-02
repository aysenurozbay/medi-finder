export type Specialty =
  | "general"
  | "cardiology"
  | "neurology"
  | "orthopedics"
  | "pediatrics"
  | "dermatology";

export type Provider = {
  id: string;
  name: string;
  specialty: Specialty;
  location: string;
  rating: number;
  verified: boolean;
};
