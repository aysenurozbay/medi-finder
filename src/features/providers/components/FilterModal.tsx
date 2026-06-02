import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProviderType } from "../types";
import { FilterState } from "../../filters/types";

type Props = {
  visible: boolean;
  onClose: () => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  cities: string[];
  countries: string[];
  defaultFilters: FilterState;
};
export default function FilterModal({
  visible,
  onClose,
  filters,
  setFilters,
  cities,
  countries,
  defaultFilters,
}: Props) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      {/* OVERLAY */}
      <View style={styles.overlay}>
        {/* SHEET */}
        <View style={styles.sheet}>
          {/* HANDLE */}
          <View style={styles.handle} />

          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.title}>Filters</Text>

            <Pressable onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={20} color="#111" />
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* TYPE */}
            <Text style={styles.sectionTitle}>Provider Type</Text>

            <View style={styles.row}>
              {(["doctor", "clinic", "hospital"] as const).map((t) => (
                <Pressable
                  key={t}
                  onPress={() =>
                    setFilters((prev) => ({
                      ...prev,
                      type: prev.type === t ? null : t,
                    }))
                  }
                  style={[styles.chip, filters.type === t && styles.chipActive]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      filters.type === t && styles.chipTextActive,
                    ]}
                  >
                    {t === "doctor"
                      ? "Doctor"
                      : t === "clinic"
                        ? "Clinic"
                        : "Hospital"}
                  </Text>
                </Pressable>
              ))}
            </View>
            {/* COUNTRY */}
            <Text style={styles.sectionTitle}>Country</Text>
            <View style={styles.row}>
              {countries.map((c) => (
                <Pressable
                  key={c}
                  onPress={() =>
                    setFilters((prev) => ({
                      ...prev,
                      country: prev.country === c ? null : c,
                    }))
                  }
                  style={[
                    styles.chip,
                    filters.country === c && styles.chipActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      filters.country === c && styles.chipTextActive,
                    ]}
                  >
                    {c}
                  </Text>
                </Pressable>
              ))}
            </View>
            {/* CITY */}
            <Text style={styles.sectionTitle}>City</Text>
            <View style={styles.row}>
              {cities.map((city) => (
                <Pressable
                  key={city}
                  onPress={() =>
                    setFilters((prev) => ({
                      ...prev,
                      city: prev.city === city ? null : city,
                    }))
                  }
                  style={[
                    styles.chip,
                    filters.city === city && styles.chipActive,
                  ]}
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
              {[4, 4.5, 4.8].map((r) => (
                <Pressable
                  key={r}
                  onPress={() =>
                    setFilters((prev) => ({
                      ...prev,
                      minRating: prev.minRating === r ? null : r,
                    }))
                  }
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
            <Text style={styles.sectionTitle}>Sort by</Text>
            <View style={styles.row}>
              {(["rating", "reviews"] as const).map((s) => (
                <Pressable
                  key={s}
                  onPress={() =>
                    setFilters((prev) => ({
                      ...prev,
                      sort: s,
                    }))
                  }
                  style={[styles.chip, filters.sort === s && styles.chipActive]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      filters.sort === s && styles.chipTextActive,
                    ]}
                  >
                    {s === "rating" ? "Top Rated" : "Most Reviewed"}
                  </Text>
                </Pressable>
              ))}
            </View>

            {/* ACTIONS */}
            <View style={styles.actions}>
              <Pressable
                onPress={() => setFilters(defaultFilters)}
                style={styles.resetBtn}
              >
                <Text style={styles.resetText}>Reset</Text>
              </Pressable>

              <Pressable onPress={onClose} style={styles.applyBtn}>
                <Text style={styles.applyText}>Apply Filters</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  sheet: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 24,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    maxHeight: "85%",
  },

  handle: {
    width: 44,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#E5E7EB",
    alignSelf: "center",
    marginBottom: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  closeBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6B7280",
    marginTop: 16,
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
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#fff",
  },

  chipActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },

  chipText: {
    fontSize: 13,
    color: "#374151",
  },

  chipTextActive: {
    color: "#fff",
  },

  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },

  resetBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
  },

  applyBtn: {
    flex: 2,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#111827",
    alignItems: "center",
  },

  resetText: {
    color: "#111827",
    fontWeight: "600",
  },

  applyText: {
    color: "#fff",
    fontWeight: "600",
  },
});
