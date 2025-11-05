import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

// ✅ Simple reusable toggle (no animation)
const Toggle = ({ value, onChange, activeColor = "#FBB03B" }: any) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onChange}
    style={{
      width: 52,
      height: 30,
      borderRadius: 9999,
      backgroundColor: value ? activeColor : "#d1d5db",
      padding: 2,
      justifyContent: "center",
    }}
  >
    <View
      style={{
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: value ? 22 : 0,
      }}
    />
  </TouchableOpacity>
);

const WallpaperSetupModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const [isActivated, setIsActivated] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [lockWallpaper, setLockWallpaper] = useState(false);
  const [syncDevices, setSyncDevices] = useState(false);
  const [selectedDisplay, setSelectedDisplay] = useState("Fit");

  const displayModes = [
    { label: "Fit", desc: "Scale to fit without cropping" },
    { label: "Fill", desc: "Scale to fill the entire screen" },
    { label: "Stretch", desc: "Stretch to fill the screen" },
    { label: "Tile", desc: "Repeat the image to fill the screen" },
  ];

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={() => onClose?.()}
      onBackButtonPress={() => onClose?.()}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.6}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View className="bg-white rounded-t-3xl px-6 pt-6 pb-10 max-h-[92%] w-[330px] shadow-lg text-center mx-auto">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <Text className="text-[22px] font-semibold text-gray-800 mb-1">
            Wallpaper Setup
          </Text>
          <Text className="text-gray-500 mb-6 text-[14px] leading-[20px]">
            Configure your wallpaper settings and enable auto-rotation.
          </Text>

          {/* Activate Wallpaper */}
          <View className="border border-gray-200 p-4 rounded-2xl mb-6 bg-gray-50">
            <View className="flex-row justify-between items-center">
              <View className="flex-1 pr-3">
                <Text className="text-[15px] font-medium text-gray-800 font-poppins">
                  Activate Wallpaper
                </Text>
                <Text className="text-[#9C9C9C] text-[14px] mt-[2px]">
                 Set the selected wallpaper as your desktop background
                </Text>
              </View>

             
            </View>

           
             <View className="mt-3 bg-[#C8FFBD] py-[5px] px-[12px] rounded-full self-start flex-row items-center">
  <Ionicons name="checkmark-circle" size={16} color="#1BA400" />
  <Text className="text-[#1BA400] text-[13px] font-semibold ml-1">
    Activated
  </Text>
</View>
           
          </View>

          {/* Display Mode */}
          <Text className="text-[20px] font-medium font-poppins text-black mb-[8px]">
            Display Mode
          </Text>
        <View className="border border-[#D8D8D8] rounded-2xl overflow-hidden mb-6">
  {displayModes.map((mode, index) => (
    <TouchableOpacity
      key={mode.label}
      onPress={() => setSelectedDisplay(mode.label)}
      activeOpacity={0.7}
      className={`p-4 flex-row items-center justify-between ${
        index !== displayModes.length - 1 ? "" : ""
      }`}
    >
      {/* Radio first */}
      <View
        className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center mr-3 ${
          selectedDisplay === mode.label
            ? "border-amber-500"
            : "border-[#D8D8D8]"
        }`}
      >
        {selectedDisplay === mode.label && (
          <View className="w-[10px] h-[10px] rounded-full bg-amber-500" />
        )}
      </View>

      {/* Text next */}
      <View className="flex-1">
        <Text className="text-[16px] text-black font-medium font-poppins mb-[2px]">
          {mode.label}
        </Text>
        <Text className="text-[#9C9C9C] text-[14px]">{mode.desc}</Text>
      </View>
    </TouchableOpacity>
  ))}
</View>


          {/* Auto Rotation */}
          <View className="border border-gray-200 p-4 rounded-2xl mb-6 bg-gray-50 flex-row justify-between ">
            <View className="flex-1 pr-3">
              <Text className="text-[16px] font-medium text-black">
                Auto-Rotation
              </Text>
              <Text className="text-gray-500 text-[13px] mt-[2px]">
                Automatically change wallpaper at intervals.
              </Text>
            </View>

            <Toggle
              value={autoRotate}
              onChange={() => setAutoRotate(!autoRotate)}
              activeColor="#f59e0b"
            />
          </View>

          {/* Advanced Settings */}
          <Text className="text-[20px]  font-poppins text-gray-800 mb-[8px]">
            Advanced Settings
          </Text>

{/* Lock Wallpaper */}
<View className="border border-gray-200 p-4 rounded-2xl mb-[8px] flex-row items-center">
  {/* Square Radio Input with inner padding */}
  <TouchableOpacity
    onPress={() => setLockWallpaper(!lockWallpaper)}
    className={`w-[24px] h-[24px] rounded-md border-2 mr-3 items-center justify-center ${
      lockWallpaper ? "border-yellow-500" : "border-gray-300"
    }`}
  >
    {lockWallpaper && (
      <View className="w-3.5 h-3.5 bg-yellow-500 rounded-sm" />
    )}
  </TouchableOpacity>

  {/* Text Section */}
  <View className="flex-1">
    <Text className="text-[16px] font-medium text-black font-poppins">
      Lock Wallpaper
    </Text>
    <Text className="text-gray-500 text-[13px] mt-[2px]">
      Prevent accidental changes.
    </Text>
  </View>
</View>

{/* Sync Devices */}
<View className="border border-gray-200 p-4 rounded-2xl mb-8 flex-row items-center">
  {/* Square Radio Input with inner padding */}
  <TouchableOpacity
    onPress={() => setSyncDevices(!syncDevices)}
    className={`w-[24px] h-[24px] rounded-md border-2 mr-3 items-center justify-center ${
      syncDevices ? "border-yellow-500" : "border-gray-300"
    }`}
  >
    {syncDevices && (
      <View className="w-3.5 h-3.5 bg-yellow-500 rounded-sm" />
    )}
  </TouchableOpacity>

  {/* Text Section */}
  <View className="flex-1">
    <Text className="text-[16px] font-medium text-black font-poppins">
      Sync Across Devices
    </Text>
    <Text className="text-gray-500 text-[13px] mt-[2px]">
      Keep wallpaper consistent on all devices.
    </Text>
  </View>
</View>



          {/* Buttons */}
          <TouchableOpacity
            className="bg-amber-500 py-3.5 rounded-full mb-3 active:bg-amber-600"
            activeOpacity={0.8}
          >
            <Text className="text-white text-center text-[16px] font-semibold">
              Save Settings
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="py-3.5 rounded-full border border-gray-300 active:bg-gray-100"
            onPress={onClose}
            activeOpacity={0.8}
          >
            <Text className="text-center text-[16px] font-semibold text-gray-700">
              Cancel
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default WallpaperSetupModal;
