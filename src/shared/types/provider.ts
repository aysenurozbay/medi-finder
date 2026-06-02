import { ProviderSummary } from "../../features/providers/types";

export type Review = {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type ProviderDetail = ProviderSummary & {
  reviews?: Review[];
  image?: string;
  yearsExperience: number;

  patients: number;

  satisfactionRate: number; // 0–100

  about: string;

  workingHours: {
    day:
      | "monday"
      | "tuesday"
      | "wednesday"
      | "thursday"
      | "friday"
      | "saturday"
      | "sunday";
    open: string;
    close: string;
  }[];

  contact: {
    phone: string;
    email: string;
    address: string;
  };

  certifications: string[];
};
