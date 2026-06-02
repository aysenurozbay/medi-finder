import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import CategoryChip from "../components/CategoryChip";
import { providers } from "../services/mockProviders";
import { SPECIALTIES } from "../../../shared/constants/specialties";
import { Specialty } from "../types";
import { PROVIDER } from "../services/mockProvider";

type FilterState = {
  city: string | null;
  minRating: number | null;
  sort: "rating" | "reviews" | null;
};

export default function DiscoveryScreen({ navigation }: any) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Specialty | null>(
    null,
  );

  const [filters, setFilters] = useState<FilterState>({
    city: null,
    minRating: null,
    sort: "rating",
  });

  const filteredProviders = useMemo(() => {
    return providers.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = selectedCategory
        ? p.specialty === selectedCategory
        : true;

      const matchesCity = filters.city ? p.city.includes(filters.city) : true;

      const matchesRating = filters.minRating
        ? p.rating >= filters.minRating
        : true;

      return matchesSearch && matchesCategory && matchesCity && matchesRating;
    });
  }, [search, selectedCategory, filters]);

  const openFilter = () => {
    navigation.navigate("FilterModal", {
      filters,
      onApply: setFilters,
    });
  };

  const renderItem = ({ item }: any) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        navigation.navigate("ProviderDetail", { provider: PROVIDER })
      }
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.specialty}>{item.specialty}</Text>
      <Text style={styles.location}>
        {item.city}, {item.country}
      </Text>

      <Text style={styles.rating}>⭐ {item.rating}</Text>
    </Pressable>
  );

  const renderHeader = () => (
    <View>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.subtitle}>Welcome back</Text>
          <Text style={styles.title}>Find your doctor</Text>
        </View>
      </View>

      {/* CATEGORY CHIPS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipContainer}
      >
        {Object.entries(SPECIALTIES).map(([key, specialty]) => {
          const specialtyKey = key as Specialty;

          return (
            <CategoryChip
              key={specialtyKey}
              label={specialty.label}
              icon={specialty.icon}
              color={specialty.color}
              selected={selectedCategory === specialtyKey}
              onPress={() =>
                setSelectedCategory(
                  selectedCategory === specialtyKey ? null : specialtyKey,
                )
              }
            />
          );
        })}
      </ScrollView>

      {/* SEARCH + FILTER */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search doctors, clinics..."
          value={search}
          onChangeText={setSearch}
          style={styles.search}
        />

        <Pressable style={styles.filterBtn} onPress={openFilter}>
          <Ionicons name="options-outline" size={20} color="#111" />
        </Pressable>
      </View>

      {/* FILTER SUMMARY */}
      {(filters.city || filters.minRating) && (
        <View style={styles.activeFilters}>
          {filters.city && (
            <Text style={styles.filterTag}>📍 {filters.city}</Text>
          )}
          {filters.minRating && (
            <Text style={styles.filterTag}>⭐ {filters.minRating}+</Text>
          )}
        </View>
      )}

      <Text style={styles.sectionTitle}>Top Rated</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* TOP STATIC AREA */}
      <View style={styles.topSection}>{renderHeader()}</View>

      {/* SCROLLABLE LIST */}
      <FlatList
        data={filteredProviders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  topSection: {
    paddingHorizontal: 16,
  },

  list: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  header: {
    marginTop: 10,
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 12,
    color: "#888",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  chipContainer: {
    paddingVertical: 12,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
  },

  search: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
  },

  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  activeFilters: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },

  filterTag: {
    backgroundColor: "#ffed66",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    fontSize: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 16,
    marginBottom: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  specialty: {
    fontSize: 13,
    color: "#666",
  },

  location: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },

  rating: {
    marginTop: 6,
    fontWeight: "600",
  },
});
