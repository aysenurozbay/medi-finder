import { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategoryChip from "../components/CategoryChip";
import { SPECIALTIES } from "../../../shared/constants/specialties";
import { Specialty } from "../types";
import FilterModal from "../components/FilterModal";
import { getProviderColor } from "../../../shared/utils/getProviderColor";
import {
  getUniqueCities,
  getUniqueCountries,
} from "../../../shared/utils/getLocation";
import Screen from "../../../shared/components/layout/Screen";
import EmptyState from "../../../shared/components/ui/EmptyState";
import { useFilteredProviders } from "../hooks/useFilteredProviders";
import { providers } from "../services/mock/providerData";
import { DEFAULT_FILTERS } from "../../filters/defaultFilters";
import { FilterState } from "../../filters/types";
import LoadingState from "../../../shared/components/ui/Loading";
import { useOfflineMock } from "@/shared/hooks/useOfflineMock";

export default function DiscoveryScreen({ navigation }: any) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const isOffline = useOfflineMock();
  const openFilter = () => setFilterOpen(true);

  const setCategory = (specialty: Specialty) => {
    setFilters((prev) => ({
      ...prev,
      specialty: prev.specialty === specialty ? null : specialty,
    }));
  };

  const filteredProviders = useFilteredProviders(providers, {
    ...filters,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderItem = ({ item }: any) => (
    <Pressable
      style={[styles.card, getProviderColor(item.type)]}
      onPress={() => navigation.navigate("ProviderDetail", { id: item.id })}
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
      <View style={styles.header}>
        <View>
          <Text style={styles.subtitle}>Welcome back</Text>
          <Text style={styles.title}>Find your doctor</Text>
        </View>
      </View>

      {/* CATEGORY */}
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
              selected={filters.specialty === specialtyKey}
              onPress={() => setCategory(specialtyKey)}
            />
          );
        })}
      </ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search by name, specialty, etc."
          style={styles.search}
          value={filters.search}
          onChangeText={(text) => setFilters((p) => ({ ...p, search: text }))}
        />

        <Pressable style={styles.filterBtn} onPress={openFilter}>
          <Ionicons name="options-outline" size={20} color="#111" />
        </Pressable>
      </View>

      {/* FILTER SUMMARY */}
      {(filters.city || filters.minRating || filters.country) && (
        <View style={styles.activeFilters}>
          {filters.type && (
            <Text style={styles.filterTag}>
              {filters.type === "doctor"
                ? "Doctor"
                : filters.type === "clinic"
                  ? "Clinic"
                  : "Hospital"}
            </Text>
          )}
          {filters.city && (
            <Text style={styles.filterTag}>📍 {filters.city}</Text>
          )}

          {filters.country && (
            <Text style={styles.filterTag}>🏳️ {filters.country}</Text>
          )}
          {filters.minRating !== null && (
            <Text style={styles.filterTag}>⭐ {filters.minRating}+</Text>
          )}
        </View>
      )}

      <Text style={styles.sectionTitle}>Top Rated</Text>
    </View>
  );

  if (isOffline) {
    return (
      <Screen>
        <EmptyState title="You're offline" subtitle="Please try again" />
      </Screen>
    );
  }

  if (loading) {
    return (
      <Screen>
        <LoadingState text="Finding the best providers..." />
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.topSection}>{renderHeader()}</View>

      <FlatList
        data={filteredProviders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListEmptyComponent={() => (
          <EmptyState
            title="No providers found"
            subtitle="Try changing filters or search terms"
          />
        )}
      />

      <FilterModal
        visible={filterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
        cities={getUniqueCities(providers)}
        countries={getUniqueCountries(providers)}
        defaultFilters={DEFAULT_FILTERS}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  topSection: {},

  list: {
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
