import React from "react";
import { View, StyleSheet } from "react-native";
import SkeletonBox from "./SkeletonBox";

export default function ProviderCardSkeleton() {
  return (
    <View style={styles.card}>
      <SkeletonBox width={60} height={60} borderRadius={30} />

      <View style={styles.info}>
        <SkeletonBox width={140} height={14} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  info: {
    marginLeft: 12,
    gap: 6,
  },
});
