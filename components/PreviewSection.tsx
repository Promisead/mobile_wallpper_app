import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RightDrawer from "./RightDrawer";
 

const PreviewSection = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
const router = useRouter()
  return (
    <>
      {/* Main Content */}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 flex-col md:flex-row items-stretch justify-between px-4 md:px-8 py-6">
          {/* Left Section */}
          <View className="flex-1 rounded-2xl p-6 min-w-[279px]">
            <Text className="text-[28px] md:text-[32px] font-semibold text-black mb-9 font-poppins">
              Preview
            </Text>

            <Text className="mb-[5px] text-[#808080] text-[14px] font-poppins">
              Name
            </Text>
            <Text className="text-[24px] font-poppins font-medium text-black mb-[30px]">
              Nature 1
            </Text>

            <Text className="mb-[5px] text-[#808080] text-[14px] font-poppins">
              Tags
            </Text>
            <View className="flex-row flex-wrap gap-[12px] mb-[30px]">
              {["Nature", "Ambience", "Flowers"].map((tag) => (
                <View
                  key={tag}
                  className="bg-[#BFBFBF33] p-[12px] rounded-[24px]"
                >
                  <Text className="font-poppins text-[12px] text-black">
                    {tag}
                  </Text>
                </View>
              ))}
            </View>

            <Text className="mb-[5px] text-[#808080] text-[14px] font-poppins">
              Description
            </Text>
            <Text className="mb-[30px] font-medium font-poppins text-[14px] leading-6">
              Discover the pure beauty of "Natural Essence" – your gateway to
              authentic, nature-inspired experiences. Let this unique collection
              elevate your senses and connect you with the unrefined elegance of
              the natural world.
            </Text>

            <View className="flex-row gap-[16px] items-center">
              <Image
                source={require("../assets/images/upload.png")}
                style={{ width: 40, height: 40, resizeMode: "contain" }}
              />
              <Image
                source={require("../assets/images/minimize.png")}
                style={{ width: 40, height: 40, resizeMode: "contain" }}
              />
              <Image
                source={require("../assets/images/settings.png")}
                style={{ width: 40, height: 40, resizeMode: "contain" }}
              />
            </View>
          </View>

          {/* Right Section */}
          <View className="flex-1 items-center justify-center mt-8 md:mt-0">
            <View className="rounded-2xl items-center justify-center p-4">
              <Image
                source={require("../assets/images/iphone.png")}
                style={{
                  width: 248.51,
                  height: 520.03,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>
        </View>

        {/* Buttons aligned to right side */}
        <View className="flex-row justify-end gap-[16px] items-center mt-6 px-4 md:px-8">
          <TouchableOpacity onPress={()=> router.push("/favourites")} className="rounded-[21px] border border-[#DFDFDF] px-[25.5px] py-[14px] bg-transparent">
            <Text className="text-[14px] font-poppins text-black">
              Save to Favourite
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsDrawerVisible(true)}
            className="rounded-[21px] bg-[#FBB03B] border border-[#DFDFDF] px-[25.5px] py-[14px]"
          >
            <Text className="text-[14px] font-poppins text-white">
              Set to Wallpaper
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Drawer Component */}
      <RightDrawer
        visible={isDrawerVisible}
        onClose={() => setIsDrawerVisible(false)}
      />
    </>
  );
};

export default PreviewSection;
