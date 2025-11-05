import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import "./global.css";

SplashScreen.preventAutoHideAsync();

function LayoutContent() {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-gray-200"
      style={{
        paddingTop: top || StatusBar.currentHeight || 0,
       
      }}
    >
      <Header />
      <Sidebar />
      <Slot />
    </View>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ClashDisplay_Regular: require("@/assets/fonts/ClashDisplay-Regular.otf"),
    ClashDisplay_Medium: require("@/assets/fonts/ClashDisplay-Medium.otf"),
    ClashDisplay_Semibold: require("@/assets/fonts/ClashDisplay-Semibold.otf"),
    ClashDisplay_Bold: require("@/assets/fonts/ClashDisplay-Bold.otf"),
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded) await SplashScreen.hideAsync();
    };
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#ef4444" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <LayoutContent />
    </SafeAreaProvider>
  );
}
