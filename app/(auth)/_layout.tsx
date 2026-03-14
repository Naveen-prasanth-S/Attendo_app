// app/(auth)/_layout.tsx
import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default AuthLayout;
