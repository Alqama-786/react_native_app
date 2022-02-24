import * as React from "react";
import { View, Text, Image, StyleSheet, Button, Linking } from "react-native";
import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const NetflixCard = () => {
  let [fontsLoaded] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Netflix Card </Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://asianwiki.com/images/3/33/All_of_Us_Are_Dead-cp1.jpeg",
          }}
        />

        <View style={styles.poster__info}>
          <Text style={styles.poster__title}> All Of Us Dead </Text>
          <Text style={styles.poster__text}>
            Find out why the All of us dead. When an island populated by happy,
            flightless birds is visited by mysterious green piggies, it's up to
            three unlikely outcasts - Red, Chuck and Bomb{" "}
          </Text>
        </View>
        <Button
          title="Watch Now"
          onPress={() => Linking.openURL("https://www.netflix.com/browse")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "JosefinSans_500Medium",
    color: "rgb(255, 0, 0)",
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: "center",
  },
  poster__info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster__title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "JosefinSans_400Regular",
    textShadowColor: "rgb(255, 255, 255)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  poster__text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
    fontFamily: "JosefinSans_300Light",
    fontSize: 16,
  },
  imgStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  buttonStyle: {
    borderWidth: 0,
    borderRadius: 20,
  },
});

export default NetflixCard;
