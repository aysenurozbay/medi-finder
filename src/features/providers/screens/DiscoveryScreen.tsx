import { useMemo, useState } from "react";
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
import { providers } from "../services/mockProviders";
import { SPECIALTIES } from "../../../shared/constants/specialties";
import { ProviderType, Specialty } from "../types";
import FilterModal from "../components/FilterModal";
import { getProviderColor } from "../../../shared/utils/getProviderColor";
import {
  getUniqueCities,
  getUniqueCountries,
} from "../../../shared/utils/getLocation";
import Screen from "../../../shared/components/layout/Screen";
import EmptyState from "../../../shared/components/ui/EmptyState";

/**
 * ✅ TEK VE NET TYPE
 */
type FilterState = {
  city: string | null;
  country: string | null;
  minRating: number | null;
  sort: "rating" | "reviews";
  type: ProviderType | null;
};

const DEFAULT_FILTERS: FilterState = {
  city: null,
  country: null,
  minRating: null,
  sort: "rating",
  type: null,
};

export default function DiscoveryScreen({ navigation }: any) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Specialty | null>(
    null,
  );

  const [filterOpen, setFilterOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const openFilter = () => setFilterOpen(true);

  const filteredProviders = useMemo(() => {
    let result = providers.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = filters.type ? p.type === filters.type : true;

      const matchesCategory = selectedCategory
        ? p.specialty === selectedCategory
        : true;

      const matchesCity = filters.city ? p.city === filters.city : true;
      const matchesCountry = filters.country
        ? p.country === filters.country
        : true;

      const matchesRating =
        filters.minRating !== null ? p.rating >= filters.minRating : true;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesCity &&
        matchesRating &&
        matchesType &&
        matchesCountry
      );
    });

    if (filters.sort === "reviews") {
      result = [...result].sort((a: any, b: any) => b.reviews - a.reviews);
    }

    if (filters.sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, selectedCategory, filters]);

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
        defaultFilters={{
          city: null,
          minRating: null,
          sort: "rating",
          country: null,
          type: null,
        }}
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
