import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type FilterState = {
  city: string | null;
  minRating: number | null;
  verifiedOnly: boolean;
  sort: "rating" | "reviews";
};

const CITIES = ["Ankara", "Istanbul", "Izmir"];
const RATINGS = [4, 4.5, 4.8];

export default function FilterModal({ navigation, route }: any) {
  const initialFilters = route.params?.filters;

  const [filters, setFilters] = useState<FilterState>(
    initialFilters || {
      city: null,
      minRating: null,
      verifiedOnly: false,
      sort: "rating",
    },
  );

  const toggleCity = (city: string) => {
    setFilters((prev) => ({
      ...prev,
      city: prev.city === city ? null : city,
    }));
  };

  const toggleRating = (rating: number) => {
    setFilters((prev) => ({
      ...prev,
      minRating: prev.minRating === rating ? null : rating,
    }));
  };

  const applyFilters = () => {
    route.params?.onApply?.(filters);
    navigation.goBack();
  };

  const resetFilters = () => {
    setFilters({
      city: null,
      minRating: null,
      verifiedOnly: false,
      sort: "rating",
    });
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Filters</Text>

        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#111" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* CITY */}
        <Text style={styles.sectionTitle}>City</Text>
        <View style={styles.row}>
          {CITIES.map((city) => (
            <Pressable
              key={city}
              onPress={() => toggleCity(city)}
              style={[styles.chip, filters.city === city && styles.chipActive]}
            >
              <Text
                style={[
                  styles.chipText,
                  filters.city === city && styles.chipTextActive,
                ]}
              >
                {city}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* RATING */}
        <Text style={styles.sectionTitle}>Minimum Rating</Text>
        <View style={styles.row}>
          {RATINGS.map((r) => (
            <Pressable
              key={r}
              onPress={() => toggleRating(r)}
              style={[
                styles.chip,
                filters.minRating === r && styles.chipActive,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  filters.minRating === r && styles.chipTextActive,
                ]}
              >
                ⭐ {r}+
              </Text>
            </Pressable>
          ))}
        </View>

        {/* SORT */}
        <Text style={styles.sectionTitle}>Sort By</Text>

        <View style={styles.row}>
          {["rating", "reviews"].map((s) => (
            <Pressable
              key={s}
              onPress={() => setFilters((p) => ({ ...p, sort: s as any }))}
              style={[styles.chip, filters.sort === s && styles.chipActive]}
            >
              <Text
                style={[
                  styles.chipText,
                  filters.sort === s && styles.chipTextActive,
                ]}
              >
                {s}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* ACTIONS */}
      <View style={styles.actions}>
        <Pressable style={styles.resetBtn} onPress={resetFilters}>
          <Text style={styles.resetText}>Reset</Text>
        </Pressable>

        <Pressable style={styles.applyBtn} onPress={applyFilters}>
          <Text style={styles.applyText}>Apply Filters</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F3EF",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  chipActive: {
    backgroundColor: "#111",
  },

  chipText: {
    fontSize: 13,
    color: "#333",
  },

  chipTextActive: {
    color: "#fff",
  },

  toggle: {
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  toggleActive: {
    backgroundColor: "#111",
  },

  toggleText: {
    fontSize: 13,
    color: "#333",
  },

  toggleTextActive: {
    color: "#fff",
  },

  actions: {
    flexDirection: "row",
    padding: 16,
    gap: 10,
  },

  resetBtn: {
    flex: 1,
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
  },

  applyBtn: {
    flex: 2,
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#111",
    alignItems: "center",
  },

  resetText: {
    color: "#111",
    fontWeight: "600",
  },

  applyText: {
    color: "#fff",
    fontWeight: "600",
  },
});
