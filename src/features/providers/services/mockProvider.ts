import { ProviderDetail } from "../../../shared/types/provider";

export const PROVIDER: ProviderDetail = {
  id: "1",
  name: "Dr. Sarah Mitchell",
  specialty: "cardiology",
  city: "New York",
  country: "USA",
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
  yearsExperience: 15,
  patients: "2,500+",
  satisfaction: 98,
  about:
    "Dr. Sarah Mitchell is a board-certified cardiologist with over 15 years of experience...",
  workingHours: [
    { day: "Mon - Fri", hours: "9:00 - 17:00" },
    { day: "Saturday", hours: "10:00 - 14:00" },
    { day: "Sunday", hours: "Closed" },
  ],
  contact: {
    phone: "+1 (212) 555-0123",
    email: "dr.mitchell@medifinder.com",
    address: "New York, NY 10001",
  },
  certifications: [
    "Board Certified Cardiologist",
    "Fellow of ACC",
    "Heart Failure Specialist",
  ],

  reviews: [
    {
      id: "r1",
      userName: "John Doe",
      rating: 5,
      comment: "Amazing doctor! Very attentive and professional.",
      createdAt: "2026-01-10",
    },
    {
      id: "r2",
      userName: "Emily Stone",
      rating: 4,
      comment: "Great experience overall, highly recommended.",
      createdAt: "2026-01-05",
    },
    {
      id: "r3",
      userName: "Michael Brown",
      rating: 5,
      comment: "Explains everything clearly. Felt very safe.",
      createdAt: "2025-12-28",
    },
  ],
};
