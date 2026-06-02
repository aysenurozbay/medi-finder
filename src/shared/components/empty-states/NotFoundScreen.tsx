import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title?: string;
  subtitle?: string;
  onAction?: () => void;
  actionLabel?: string;
};

export default function NotFoundScreen({
  title = "Nothing here yet",
  subtitle = "We couldn’t find any data matching your request.",
  onAction,
  actionLabel = "Go Back",
}: Props) {
  return (
    <View style={styles.container}>
      {/* ICON */}
      <View style={styles.iconWrapper}>
        <Ionicons name="search-outline" size={42} color="#9CA3AF" />
      </View>

      {/* TEXT */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      {/* ACTION */}
      {onAction && (
        <Pressable onPress={onAction} style={styles.button}>
          <Text style={styles.buttonText}>{actionLabel}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },

  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 18,
  },

  button: {
    marginTop: 20,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#111827",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
});
