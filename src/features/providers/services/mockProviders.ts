import { ProviderSummary } from "../types";

export const providers: ProviderSummary[] = [
  // ===================== DOCTORS =====================
  {
    id: "doc-1",
    name: "Dr. Sarah Johnson",
    type: "doctor",
    specialty: "cardiology",
    city: "London",
    country: "UK",
    rating: 4.8,
  },
  {
    id: "doc-2",
    name: "Dr. James Wilson",
    type: "doctor",
    specialty: "neurology",
    city: "Istanbul",
    country: "TR",
    rating: 4.6,
  },
  {
    id: "doc-3",
    name: "Dr. Emily Carter",
    type: "doctor",
    specialty: "pediatrics",
    city: "Berlin",
    country: "DE",
    rating: 4.9,
  },

  // ===================== CLINICS =====================
  {
    id: "clinic-1",
    name: "MedLife Clinic",
    type: "clinic",
    specialty: "general",
    city: "Ankara",
    country: "TR",
    rating: 4.5,
  },
  {
    id: "clinic-2",
    name: "HealthPoint Clinic",
    type: "clinic",
    specialty: "dermatology",
    city: "London",
    country: "UK",
    rating: 4.4,
  },

  // ===================== HOSPITALS =====================
  {
    id: "hospital-1",
    name: "City Hospital",
    type: "hospital",
    specialty: "orthopedics",
    city: "Istanbul",
    country: "TR",
    rating: 4.7,
  },
  {
    id: "hospital-2",
    name: "University Hospital",
    type: "hospital",
    specialty: "neurology",
    city: "New York",
    country: "US",
    rating: 4.9,
  },
];
