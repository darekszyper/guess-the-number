import { StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";

function InstructionText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
    fontSize: 25,
    color: COLORS.accent500,
  },
});
