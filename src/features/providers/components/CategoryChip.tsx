import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  selected: boolean;
  color: string;
  onPress: () => void;
};

export default function CategoryChip({
  label,
  icon,
  selected,
  color,
  onPress,
}: Props) {
  console.log(color);
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        { backgroundColor: color },
        selected && styles.selected,
      ]}
    >
      <Ionicons name={icon} size={22} color="#111" />

      <Text style={[styles.label, selected && styles.labelSelected]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    width: 92,
    height: 96,
    borderRadius: 18,
    padding: 10,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,

    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.06)",
  },

  selected: {
    borderColor: "#acacac",
    borderWidth: 1,
  },

  label: {
    fontSize: 12,
    fontWeight: "500",
    color: "#3A3A3A",
    textAlign: "center",
  },

  labelSelected: {
    fontWeight: "600",
    color: "#111",
  },
});
