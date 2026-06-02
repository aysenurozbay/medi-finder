import { ProviderDetail } from "../../../shared/types/provider";

export const providerDetails: ProviderDetail[] = [
  {
    id: "doc-1",
    name: "Dr. Sarah Johnson",
    type: "doctor",
    specialty: "cardiology",
    city: "London",
    country: "UK",
    rating: 4.8,

    patients: 320,
    satisfactionRate: 94,
    yearsExperience: 12,

    about:
      "Experienced cardiologist specializing in preventive cardiology and heart disease management.",

    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",

    contact: {
      phone: "+44 123 456 789",
      email: "sarah.johnson@medifinder.com",
      address: "London Heart Clinic",
    },

    workingHours: [
      { day: "monday", open: "09:00", close: "17:00" },
      { day: "tuesday", open: "09:00", close: "17:00" },
    ],

    certifications: [
      "Board Certified Cardiologist",
      "European Society of Cardiology Member",
    ],

    reviews: [
      {
        id: "r1",
        userName: "Alice",
        rating: 5,
        comment: "Excellent care and very professional.",
        createdAt: "2025-01-10",
      },
      {
        id: "r2",
        userName: "Bob",
        rating: 4,
        comment: "Very knowledgeable but long wait time.",
        createdAt: "2025-02-01",
      },
    ],
  },

  {
    id: "clinic-1",
    name: "MedLife Clinic",
    type: "clinic",
    specialty: "general",
    city: "Ankara",
    country: "TR",
    rating: 4.5,

    patients: 1200,
    satisfactionRate: 91,
    yearsExperience: 8,

    about: "Modern clinic offering general healthcare and outpatient services.",

    image: undefined,

    contact: {
      phone: "+90 312 123 4567",
      email: "info@medlife.com",
      address: "Ankara Medical Center",
    },

    workingHours: [
      { day: "monday", open: "08:00", close: "18:00" },
      { day: "friday", open: "08:00", close: "16:00" },
    ],

    certifications: ["ISO Certified Clinic"],

    reviews: [
      {
        id: "r1",
        userName: "Emma",
        rating: 5,
        comment: "Very clean and professional clinic.",
        createdAt: "2025-03-12",
      },
    ],
  },

  {
    id: "hospital-1",
    name: "City Hospital",
    type: "hospital",
    specialty: "orthopedics",
    city: "Istanbul",
    country: "TR",
    rating: 4.7,

    patients: 50000,
    satisfactionRate: 89,
    yearsExperience: 25,

    about:
      "Full-service hospital providing emergency care and specialist treatments.",

    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=3428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    contact: {
      phone: "+90 212 000 1111",
      email: "info@cityhospital.com",
      address: "Istanbul Medical District",
    },

    workingHours: [{ day: "monday", open: "00:00", close: "23:59" }],

    certifications: ["JCI Accredited"],

    reviews: [
      {
        id: "r1",
        userName: "John",
        rating: 5,
        comment: "Great emergency care.",
        createdAt: "2025-01-20",
      },
    ],
  },
];
