import GradientText from "@/components/GradientText";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const SavedWallpapersScreen = () => {
      const router = useRouter();
    
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      className=" px-[20px] lg:px-[47px] bg-white"
    >
         {/* Header Section */}
        <View className="mt-[30px] lg:mt-8 mb-[50px]">
                  <GradientText
                    text="Saved Wallpapers"
                    className="text-[24px] lg:text-[60px] font-[ClashDisplay_Bold]"
                  />
                  <Text className="text-[#575757] mt-2 text-[16px] lg:text-[24px] w-[348px] lg:w-[870px] font-normal font-poppins">
                   Your saved wallpapers collection
                  </Text>
                </View>
      <View className="flex-1 bg-white items-center justify-center px-6 pt-16 pb-12">
       

        {/* Empty State Illustration */}
        <View className="items-center ">
          <Image
            source={require("@/assets/images/empty.png")}
            className="w-[197.57px] h-[185.29px] opacity-80"
            resizeMode="contain"
          />

          <Text className="text-[#575757] mt-6 text-[24px] font-medium mb-[12px]">
            No Saved Wallpapers
          </Text>
          <Text className="text-[14px] text-[#575757] mt-1 text-center w-[379px] ">
            Start saving your favorite wallpapers to see them here
          </Text>

          {/* Button */}
          <TouchableOpacity  onPress={() => router.push("/browse")}   className="bg-[#FBB03B] mt-6 px-[32px] py-[14.5px] rounded-full">
            <Text className="text-white font-semibold">Browse Wallpapers</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SavedWallpapersScreen;
