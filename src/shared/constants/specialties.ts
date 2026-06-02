import { Specialty } from "../types/provider";

export const SPECIALTIES: Record<
  Specialty,
  { label: string; icon: any; color: string }
> = {
  general: {
    label: "General",
    icon: "medkit",
    color: "#ECFDF5",
  },
  cardiology: {
    label: "Cardiology",
    icon: "heart",
    color: "#FFF7ED",
  },
  neurology: {
    label: "Neurology",
    icon: "body",
    color: "#FDF2F8",
  },
  orthopedics: {
    label: "Orthopedics",
    icon: "walk",
    color: "#EFF6FF",
  },
  pediatrics: {
    label: "Pediatrics",
    icon: "person",
    color: "#ECFDF5",
  },
  dermatology: {
    label: "Dermatology",
    icon: "sunny",
    color: "#FFF7ED",
  },
};
