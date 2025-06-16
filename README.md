# Guess The Number

A simple and fun mobile game where **you pick a number, and the app tries to guess it!** Built with React Native and Expo, this project demonstrates game logic, user-friendly UI, and robust boundary management. Works seamlessly on both iOS and Android.

## Demo

| Android | iOS |
| ------- | --- |
| ![Android Demo](./gifs/android.gif) | ![IOS Demo](./gifs/ios.gif) |

- **User Picks a Number:** You choose a number within a specified range.
- **Phone Guesses:** The app attempts to guess your number.
- **Higher/Lower Feedback:** After each guess, you tell the app if your number is higher or lower.
- **Round Counter:** Tracks the number of guesses the app makes.
- **Game Over Screen:** Shows the number of rounds it took to guess your number and lets you restart.
- **Input Validation:** Prevents invalid entries and ensures the game logic stays consistent.
- **Responsive UI:** Clean and intuitive interface for both platforms.
- **Cross-Platform:** Consistent experience on Android and iOS.

## Components

- **App.js:** Manages overall state and navigation between screens.
- **StartGameScreen:** Lets you enter and confirm your secret number.
- **GameScreen:** The core gameplay—app makes guesses, you give feedback (higher/lower).
- **GameOverScreen:** Displays results and allows you to start a new game.
- **CustomButton:** Reusable button component for consistent UI.
- **NumberContainer:** Clearly displays each guess made by the app.

## Technology Stack

- **React Native** (with Expo)
- **JavaScript (ES6+)**
- **React Hooks** for state management

## Installation

```bash
git clone https://github.com/darekszyper/guess-the-number.git
cd guess-the-number
npm install
npm start
```
Open the Expo Go app on your device or use an emulator to run the project.

## About

This project demonstrates:
- Game logic (binary search, boundary management)
- State management with React hooks
- Clean, reusable component structure
- Simple, engaging user experience

---

**Enjoy challenging your phone to guess your number!**

---

You can now add your demo GIFs to the `assets` folder as `demo-android.gif` and `demo-ios.gif`.  
Let me know if you want to adjust or add any section!
