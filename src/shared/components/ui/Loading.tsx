import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

type Props = {
  text?: string;
};

export default function LoadingState({ text = "Loading..." }: Props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#111827" />

      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    marginTop: 10,
    fontSize: 13,
    color: "#6B7280",
  },
});
