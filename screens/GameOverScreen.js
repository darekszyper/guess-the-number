import { useEffect, useRef } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Alert,
  Platform,
  BackHandler,
  Text,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonsContainer from "../components/ui/ButtonsContainer";
import COLORS from "../constants/colors";

function GameOverScreen({ rounds, number, onGameRestart }) {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 6,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

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

  const handleRestart = () => {
    Animated.timing(scaleAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      onGameRestart();
    });
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Animated.Image
          style={[
            styles.image,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
          source={require("../assets/images/success.png")}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>X</Text> rounds to
        guess the number <Text style={styles.highlight}>Y</Text>.
      </Text>
      <Card>
        <InstructionText>Want to try again?</InstructionText>
        <ButtonsContainer>
          <PrimaryButton style={styles.button} onPress={handleCloseApp}>
            No, exit
          </PrimaryButton>
          <PrimaryButton style={styles.button} onPress={handleRestart}>
            Sure!
          </PrimaryButton>
        </ButtonsContainer>
      </Card>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 40,
    marginVertical: 50,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    aspectRatio: 1 / 1,
    width: "100%",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: COLORS.primary800,
    overflow: "hidden",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary500,
  },
});
