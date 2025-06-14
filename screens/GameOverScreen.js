import {
  View,
  Text,
  StyleSheet,
  Alert,
  Platform,
  BackHandler,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import COLORS from "../constants/colors";

function GameOverScreen({ onGameRestart }) {
  const handleCloseApp = () => {
    if (Platform.OS === "android") {
      Alert.alert("Exit Game", "Are you sure you want to exit?", [
        { text: "Cancel", style: "cancel" },
        { text: "Exit", onPress: () => BackHandler.exitApp() },
      ]);
    } else {
      Alert.alert("Exit Game", "Closing the app is not supported on iOS.");
    }
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Want to try again?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton style={styles.button} onPress={handleCloseApp}>
            No, exit
          </PrimaryButton>
          <PrimaryButton style={styles.button} onPress={onGameRestart}>
            Sure!
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 40,
    padding: 40,
  },
  inputContainer: {
    padding: 16,
    marginTop: 50,
    backgroundColor: COLORS.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: COLORS.accent500,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsContainer: {
    marginVertical: 8,
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default GameOverScreen;
