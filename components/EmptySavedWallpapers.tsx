import React from "react";
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import GradientText from "./GradientText";

const EmptySavedWallpapers = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View className="flex-1 bg-white items-center justify-center px-6 py-10">
      {/* Header Section */}
       <View className="mt-[30px] lg:mt-8 mb-[50px]">
                   <GradientText
                     text="Saved Wallpaper"
                     className="text-[24px] lg:text-[60px] font-[ClashDisplay_Bold] "
                   />
           
                   <Text className="text-[#575757] mt-2 text-[16px] lg:text-[24px] w-[348px] lg:w-[870px] font-normal font-poppins">
                     Your saved wallpapers collection
                   </Text>
                 </View>

      {/* Center Illustration */}
      <View className="items-center justify-center mt-24">
        <Image
          source={require("../assets/images/empty_wallpapers.png")} // 🖼️ Add a placeholder image (e.g., 2 blank cards)
          style={{
            width: isMobile ? 120 : 150,
            height: isMobile ? 120 : 150,
            resizeMode: "contain",
          }}
        />
        <Text className="text-lg font-semibold text-gray-800 mt-6">
          No Saved Wallpapers
        </Text>
        <Text className="text-gray-500 text-sm mt-2 text-center">
          Start saving your favorite wallpapers to see them here
        </Text>

        {/* Browse Wallpapers Button */}
        <TouchableOpacity className="bg-[#f4a261] px-6 py-3 mt-6 rounded-full">
          <Text className="text-white font-medium text-sm">
            Browse Wallpapers
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmptySavedWallpapers;
