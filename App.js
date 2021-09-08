import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TextInput,
  View,
} from "react-native";

import SearchInput from "./components/SearchInput";

export default function App() {
  const [location, setLocation] = useState("San Francisco");

  const handleUpdateLocation = (city) => {
    console.log("here ", city);
    setLocation(city);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={require("./assets/clear.jpg")}
        style={styles.imageContainer}
      >
        <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
          <SearchInput
            placeholder="Search any city"
            onSubmit={handleUpdateLocation}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495E",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    color: "white",
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
