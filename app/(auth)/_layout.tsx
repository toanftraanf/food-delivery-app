import { images } from "@/constants";
import { Slot } from "expo-router";
import React from "react";
import {
    Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";

const _Layout = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="h-full bg-white"
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="w-full relative h-full"
          style={{
            height: Dimensions.get("screen").height / 2.25,
          }}
        >
            <ImageBackground source={images.loginGraphic} className="size-full rounded-b-lg" resizeMode="contain"/>
        </View>
      </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  );
};

export default _Layout;
