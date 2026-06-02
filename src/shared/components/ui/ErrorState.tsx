import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
  actionText?: string;
  onRetry: () => void;
  goBack?: () => void;
};

export default function ErrorState({
  title,
  subtitle,
  actionText = "Retry",
  onRetry,
  goBack,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>⚠️</Text>

      <Text style={styles.title}>{title}</Text>

      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

      <Pressable style={styles.button} onPress={onRetry}>
        <Text style={styles.buttonText}>{actionText}</Text>
      </Pressable>
      {goBack && (
        <Pressable style={styles.goBackButton} onPress={goBack}>
          <Text style={styles.buttonText}>Go Back</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  icon: {
    fontSize: 40,
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },

  button: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: "#EF4444",
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },

  goBackButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: "#6B7280",
    borderRadius: 10,
    marginTop: 10,
  },
});
