export type Provider = {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  verified: boolean;
  available: boolean;
};
export type Category = {
  id: string;
  label: string;
  icon: keyof typeof import("@expo/vector-icons").Ionicons.glyphMap;
  color: string;
};
