import React from "react";
import { Text, View, StyleSheet, Easing } from "react-native";
import Animated from "react-native-reanimated";

export default class App extends React.Component {
  state = { progress: new Animated.Value(0.15) };
  componentDidMount() {
    // this should cause the message to fade in, but it does not
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.cubic)
    }).start(() => {
      // this should get called after ~500ms, but it does not
      console.log("Transition complete");
    });
  }
  render() {
    return (
      <Animated.View
        style={[{ opacity: this.state.progress }, styles.container]}
      >
        <Text style={styles.paragraph}>Hello Reanimated</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
