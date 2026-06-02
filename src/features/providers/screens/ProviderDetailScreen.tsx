import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { providerDetails } from "../services/mockProvider";
import { getProviderById } from "../../../shared/utils/getProviderById";
import NotFoundScreen from "../../../shared/components/empty-states/NotFoundScreen";
import Screen from "../../../shared/components/layout/Screen";

export default function ProviderDetailScreen({ route, navigation }: any) {
  const [showFullAbout, setShowFullAbout] = useState(false);
  const { id: providerId } = route.params;

  const provider = getProviderById(providerId);

  console.log("PROVIDER", provider);

  if (!provider) {
    return (
      <NotFoundScreen
        title="UPS ... Provider not found"
        subtitle="The provider you are looking for does not exist or has been removed."
        onAction={() => navigation.goBack()}
        actionLabel="Go back"
      />
    );
  }

  return (
    <Screen>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PROFILE */}
        <View style={styles.profile}>
          <View style={styles.providerDetail}>
            <Image source={{ uri: provider.image }} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{provider.name}</Text>
              <Text style={styles.sub}>{provider.specialty}</Text>
              <Text style={styles.meta}>
                📍 {provider.city}, {provider.country} • ⭐ {provider.rating}
              </Text>
            </View>
          </View>
        </View>

        {/* STATS */}
        <View style={styles.stats}>
          <Stat label="Experience" value={`${provider.yearsExperience}+`} />
          <Stat label="Patients" value={provider.patients} />
          <Stat label="Satisfaction" value={`${provider.satisfactionRate}%`} />
        </View>

        {/* ABOUT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <Text numberOfLines={showFullAbout ? undefined : 4}>
            {provider.about}
          </Text>

          <Pressable onPress={() => setShowFullAbout(!showFullAbout)}>
            <Text style={styles.link}>
              {showFullAbout ? "Show less" : "Read more"}
            </Text>
          </Pressable>
        </View>

        {/* CONTACT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>

          <Text>📞 {provider.contact.phone}</Text>
          <Text>✉️ {provider.contact.email}</Text>
        </View>

        {/* REVIEWS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reviews</Text>

          {provider.reviews?.map((review: any) => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewName}>{review.userName}</Text>
                <Text style={styles.reviewRating}>⭐ {review.rating}</Text>
              </View>

              <Text style={styles.reviewComment}>{review.comment}</Text>

              <Text style={styles.reviewDate}>{review.date}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* ACTION */}
      <View style={styles.actions}>
        <Pressable style={[styles.btn, styles.primary]}>
          <Text style={{ color: "#fff" }}>Book</Text>
        </Pressable>
      </View>
    </Screen>
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
  header: {
    flexDirection: "row",
    padding: 16,
  },

  back: { fontSize: 22 },

  profile: {
    paddingBottom: 20,
  },

  providerDetail: {
    flexDirection: "row",
  },

  info: {
    marginLeft: 16,
    justifyContent: "center",
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  name: { fontSize: 20, fontWeight: "700" },
  sub: { color: "#666" },
  meta: { marginTop: 4, color: "#888" },

  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
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

  section: {
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 14,
  },

  sectionTitle: {
    fontWeight: "700",
    marginBottom: 10,
  },

  link: {
    marginTop: 6,
    color: "#3B82F6",
    fontWeight: "600",
  },

  reviewCard: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
    borderRadius: 12,
    marginBottom: 10,
  },

  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  reviewName: {
    fontWeight: "600",
  },

  reviewRating: {
    fontWeight: "600",
  },

  reviewComment: {
    color: "#444",
  },

  reviewDate: {
    marginTop: 6,
    fontSize: 11,
    color: "#999",
  },

  actions: {
    flexDirection: "row",
    padding: 16,
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
