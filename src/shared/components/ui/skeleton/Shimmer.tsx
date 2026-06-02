import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";

export default function Shimmer({ children }: { children: React.ReactNode }) {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 300],
  });

  return (
    <View style={styles.container}>
      {children}

      <Animated.View
        style={[styles.shimmer, { transform: [{ translateX }] }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
  },
  shimmer: {
    position: "absolute",
    width: 120,
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.4)",
  },
});
