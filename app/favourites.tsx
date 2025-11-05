import GradientText from "@/components/GradientText";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Platform,

  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const wallpapers = [
  { id: 1, title: "Nature 1", category: "Nature", image: require("../assets/images/nature1.jpg") },
  { id: 2, title: "Nature 2", category: "Nature", image: require("../assets/images/nature2.jpg") },
  { id: 3, title: "Nature 3", category: "Nature", image: require("../assets/images/nature3.jpg") },
  { id: 4, title: "Nature 4", category: "Nature", image: require("../assets/images/nature4.jpg") },
  { id: 5, title: "Nature 5", category: "Nature", image: require("../assets/images/nature5.jpg") },
  { id: 6, title: "Nature 6", category: "Nature", image: require("../assets/images/nature6.jpg") },
  { id: 7, title: "Nature 1", category: "Nature", image: require("../assets/images/nature1.jpg") },
  { id: 8, title: "Nature 2", category: "Nature", image: require("../assets/images/nature2.jpg") },
  { id: 9, title: "Nature 3", category: "Nature", image: require("../assets/images/nature3.jpg") },
  { id: 10, title: "Nature 4", category: "Nature", image: require("../assets/images/nature4.jpg") },
  { id: 11, title: "Nature 5", category: "Nature", image: require("../assets/images/nature5.jpg") },
  { id: 12, title: "Nature 6", category: "Nature", image: require("../assets/images/nature6.jpg") },
];

const SavedWallpapers = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="px-[20px] lg:px-[47px] bg-white"
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: Platform.OS === "web" ? 80 : 400,
        }}
      >
        {/* Header */}
        <View className="mt-[30px] lg:mt-8 mb-[50px]">
          <GradientText
            text="Saved Wallpaper"
            className="text-[24px] lg:text-[60px] font-[ClashDisplay_Bold]"
          />
          <Text className="text-[#575757] mt-2 text-[16px] lg:text-[24px] w-[348px] lg:w-[870px] font-normal font-poppins">
            Your saved wallpapers collection
          </Text>
        </View>

        {/* Grid Layout */}
        <View className="flex-row flex-wrap justify-between gap-y-6">
          {wallpapers.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => router.push("/empty")}  
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: "48%",
                maxWidth: 200,
                aspectRatio: 3 / 4,
              }}
            >
              <Image
                source={item.image}
                className="w-full h-[290px] rounded-2xl"
                resizeMode="cover"
              />

              {/* Overlay */}
              <View className="absolute inset-0 bg-black/30 rounded-2xl" />

              {/* Heart icon */}
              <TouchableOpacity className="absolute top-2 right-2 bg-white p-2 rounded-full">
                <Ionicons name="heart" size={18} color="#ffb703" />
              </TouchableOpacity>

              {/* Text info */}
              <View className="absolute bottom-4 left-3">
                <Text className="text-white text-[24px] font-poppins">
                  {item.title}
                </Text>
                <View className="bg-white/10 px-[12px] py-1 mt-1 rounded-full self-start border border-white/20">
                  <Text className="text-white text-[14px] font-poppins">
                    {item.category}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Spacer for mobile only */}
        {Platform.OS !== "web" && <View className="h-[180px]" />}
      </ScrollView>
    </View>
  );
};

export default SavedWallpapers;
