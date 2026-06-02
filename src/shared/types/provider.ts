import { ProviderSummary } from "../../features/providers/types";

export type Review = {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type ProviderDetail = ProviderSummary & {
  reviews: Review[];
  image: string;
  yearsExperience: number;
  patients: string;
  satisfaction: number;
  about: string;
  workingHours: { day: string; hours: string }[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  certifications: string[];
};
