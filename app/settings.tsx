import GradientText from "@/components/GradientText";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SettingsScreen = () => {
  const [quality, setQuality] = useState("high");
  const [notification, setNotification] = useState(true);

  return (
    <ScrollView
      className="flex-1 bg-white px-[20px] lg:px-[48.48px]  "
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 40, // ensures scroll and bottom spacing
      }}
      showsVerticalScrollIndicator={true}
    >
      {/* Header */}
      <View className="mt-[37px] lg:mt-[50px]">
        <GradientText
          text="Settings"
          className="text-[24px] lg:text-[60px] font-[ClashDisplay_Bold]"
        />

        <Text className="text-[#575757] mt-2 text-[16px] lg:text-[24px] w-[348px] lg:w-[870px] font-normal font-poppins">
          Customize your Wallpaper Studio experience
        </Text>
      </View>

      {/* Main Container */}
      <View className=" border border-gray-200 rounded-3xl p-6 md:p-10 flex-col md:flex-row md:items-center md:justify-between mt-[50px]">
        {/* Left Section */}
        <View className="w-full md:w-1/2">
          <Text className="text-[24px] font-medium font-poppins text-black mb-[8px]">
            Wallpaper Setup
          </Text>
          <Text className="text-black mb-[26px] font-poppins">
            Configure your wallpaper settings and enable auto-rotation
          </Text>

          {/* Image Quality */}
          <View className="border border-[#E5E5E5] rounded-2xl mb-4 p-[20px]">
            <View className="px-4 py-3">
              <Text className="font-poppins text-black mb-[8px] text-[20px]">
                Image Quality
              </Text>
              <View
                className="border border-gray-200 p-[10px] rounded-xl overflow-hidden text-[#9C9C9C] text-[14px]"
                style={{
                  height: 55, // taller container
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <Picker
                  selectedValue={quality}
                  onValueChange={(value) => setQuality(value)}
                  dropdownIconColor="#999"
                  style={{
                    height: 55,
                    marginBottom: 0,
                    paddingBottom: 0,
                  }}
                >
                  <Picker.Item label="High (Best Quality)" value="high"  />
                  <Picker.Item label="Medium" value="medium" />
                  <Picker.Item label="Low" value="low" />
                </Picker>
              </View>
            </View>
          </View>

          {/* Notification Toggle */}
          <View className="border border-gray-200 rounded-2xl mb-6 px-4 py-3 flex-row justify-between items-center">
            <View className="flex-1 pr-3">
              <Text className="font-poppins text-[20px] text-black mb-[4px]">Notification</Text>
              <Text className="text-[#9C9C9C] font-poppins  text-sm">
                Get notified about new wallpapers and updates
              </Text>
            </View>
            <Switch
              value={notification}
              onValueChange={setNotification}
              trackColor={{ true: "#facc15", false: "#e5e7eb" }}
              thumbColor={notification ? "#f59e0b" : "#f4f3f4"}
            />
          </View>

          {/* Buttons */}
          <View className="flex-col lg:flex-row gap-3">
            <TouchableOpacity className="bg-gray-100 px-5 py-3 rounded-2xl flex-1 items-center">
              <Text className="text-gray-700 font-medium">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#FBB03B] px-5 py-3 rounded-2xl flex-1 items-center">
              <Text className="text-white font-medium">Save Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Right Section (Device Preview) */}
        <View className="mt-10 md:mt-0 md:w-[40%] flex items-center justify-center">
          <Image
            source={require("../assets/images/iphone2.png")}
            resizeMode="contain"
            style={{
              width: "78%", // increased width
              height: undefined,
              aspectRatio: 9 / 19, // slightly taller
              maxWidth: 650,
              maxHeight: 350,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
