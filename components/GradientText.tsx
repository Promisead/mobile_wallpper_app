// components/GradientText.tsx
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, Text } from "react-native";

interface GradientTextProps {
  text: string;
  className?: string;
}

export default function GradientText({ text, className }: GradientTextProps) {
  const isWeb = Platform.OS === "web";

  if (isWeb) {
    return (
      <Text
        className={`${className}`}
        style={{
          fontFamily: "ClashDisplay_Medium",
          backgroundImage: "linear-gradient(90deg, #FBB03B 0%, #EC0C43 100%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextStroke: "0.5px rgba(0,0,0,0.1)",
        } as any}
      >
        {text}
      </Text>
    );
  }

  return (
    <MaskedView
      maskElement={
        <Text
          className={`${className}`}
          style={{ fontFamily: "ClashDisplay_Medium" }}
        >
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={["#FBB03B", "#EC0C43"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text
          className={`${className} opacity-0`}
          style={{ fontFamily: "ClashDisplay_Medium" }}
        >
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}
