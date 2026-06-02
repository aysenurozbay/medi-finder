import { Ionicons } from "@expo/vector-icons";

export const ICONS = {
  search: "search",
  filter: "options",

  heart: "heart",
} as const;
export type IconKey = keyof typeof ICONS;
