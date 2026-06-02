import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Linking,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { PROVIDER } from "../services/mockProvider";

export default function ProviderDetailScreen({ onBack }: any) {
  const [showFullAbout, setShowFullAbout] = useState(false);

  const handleCall = () => {
    Linking.openURL(`tel:${PROVIDER.contact.phone.replace(/\D/g, "")}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${PROVIDER.contact.email}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={onBack}>
          <Text style={styles.back}>←</Text>
        </Pressable>

        <Text style={styles.title}>Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PROFILE */}
        <View style={styles.profile}>
          <Image source={{ uri: PROVIDER.image }} style={styles.avatar} />

          <Text style={styles.name}>{PROVIDER.name}</Text>
          <Text style={styles.sub}>{PROVIDER.specialty}</Text>
          <Text style={styles.meta}>
            📍 {PROVIDER.location} • ⭐ {PROVIDER.rating}
          </Text>
        </View>

        {/* ABOUT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <Text numberOfLines={showFullAbout ? undefined : 4}>
            {PROVIDER.about}
          </Text>

          <Pressable onPress={() => setShowFullAbout(!showFullAbout)}>
            <Text style={styles.link}>
              {showFullAbout ? "Show less" : "Read more"}
            </Text>
          </Pressable>
        </View>

        {/* STATS */}
        <View style={styles.stats}>
          <Stat label="Experience" value={`${PROVIDER.yearsExperience}+`} />
          <Stat label="Patients" value={PROVIDER.patients} />
          <Stat label="Satisfaction" value={`${PROVIDER.satisfaction}%`} />
        </View>

        {/* CONTACT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>

          <Text>📞 {PROVIDER.contact.phone}</Text>
          <Text>✉️ {PROVIDER.contact.email}</Text>
        </View>
      </ScrollView>

      {/* ACTION */}
      <View style={styles.actions}>
        <Pressable style={styles.btn} onPress={handleCall}>
          <Text>Call</Text>
        </Pressable>

        <Pressable style={styles.btn} onPress={handleEmail}>
          <Text>Email</Text>
        </Pressable>

        <Pressable style={[styles.btn, styles.primary]}>
          <Text style={{ color: "#fff" }}>Book</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

/* SMALL COMPONENT */
function Stat({ label, value }: any) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F3EF" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },

  back: { fontSize: 22 },

  title: { fontSize: 18, fontWeight: "600" },

  profile: {
    alignItems: "center",
    paddingVertical: 20,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
  },

  name: { fontSize: 20, fontWeight: "700" },
  sub: { color: "#666" },
  meta: { marginTop: 4, color: "#888" },

  section: {
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 14,
  },

  sectionTitle: {
    fontWeight: "700",
    marginBottom: 8,
  },

  link: {
    marginTop: 6,
    color: "#3B82F6",
    fontWeight: "600",
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },

  stat: {
    alignItems: "center",
  },

  statValue: {
    fontSize: 16,
    fontWeight: "700",
  },

  statLabel: {
    fontSize: 12,
    color: "#777",
  },

  actions: {
    flexDirection: "row",
    gap: 8,
    padding: 16,
    backgroundColor: "#fff",
  },

  btn: {
    flex: 1,
    padding: 12,
    backgroundColor: "#eee",
    alignItems: "center",
    borderRadius: 10,
  },

  primary: {
    backgroundColor: "#3B82F6",
  },
});
