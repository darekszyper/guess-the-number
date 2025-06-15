import { View, Text, StyleSheet } from "react-native";

import COLORS from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent500,
    padding: 24,
    marginHorizontal: 50,
    marginTop: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: COLORS.accent500,
    fontSize: 40,
    fontFamily: "open-sans-bold",
  },
});
