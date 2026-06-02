import React from "react";
import { View, StyleSheet } from "react-native";
import Shimmer from "./Shimmer";

export default function SkeletonBox({
  width = "100%",
  height = 20,
  borderRadius = 8,
}: {
  width?: number | string;
  height?: number;
  borderRadius?: number;
}) {
  return (
    <Shimmer>
      <View style={[styles.box, { width, height, borderRadius }]} />
    </Shimmer>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#E5E7EB",
  },
});
