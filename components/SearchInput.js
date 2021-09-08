import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchInput = (props) => {
  const [text, setText] = useState("");

  const handleChangeText = (newLocation) => {
    setText(newLocation);
  };

  const handleSubmitEditing = () => {
    const { onSubmit } = props;

    if (!text) return;

    onSubmit(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        value={text}
        placeholder={props.placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: "#666",
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: { flex: 1, color: "white" },
});
