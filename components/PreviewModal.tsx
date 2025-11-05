import { Ionicons } from "@expo/vector-icons"; // ✅ Import icon set
import type { FC } from "react";
import React from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  type ImageSourcePropType,
} from "react-native";
import WallpaperSetupModal from "./WallpaperSetupModal";

type Wallpaper = {
  id: number;
  name: string;
  tags: string;
  image: ImageSourcePropType;
};

type PreviewModalProps = {
  visible?: boolean;
  item: Wallpaper | null;
  onClose: () => void;
  isInline?: boolean;
};

const PreviewModal: FC<PreviewModalProps> = ({
  visible = false,
  item,
  onClose,
  isInline = false,
}) => {

  const [showSetup, setShowSetup] = React.useState(false);
  if (!item) return null;

  const content = (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View className="items-center mb-6">
        <Image
          source={require("../assets/images/iphone.png")}
          className="w-64 h-[400px] rounded-3xl"
          resizeMode="contain"
        />
      </View>

      <Text className="text-[32px] font-semibold text-gray-800 mb-[37px]">
        Preview
      </Text>

      <Text className="text-[14px] text-[#808080] font-poppins">Name</Text>
      <Text className="text-[24px]   text-black mb-[30px] font-medium font-poppins">{item.name}</Text>

      <Text className="text-[14px] text-[#808080] font-poppins mb-[4px]">Tags</Text>

      <View className="flex-row flex-wrap gap-[12px] mb-[30px]">
                 {["Nature", "Ambience", "Flowers"].map((tag) => (
                   <View key={tag} className="bg-[#BFBFBF33] p-[12px] rounded-[24px]">
                     <Text className="font-poppins text-[12px] text-black">
                       {tag}
                     </Text>
                   </View>
                 ))}
               </View>

      <Text className="text-[14px] text-[#808080] font-poppins">Description</Text>
      <Text className="text-[14px] text-black mb-6 leading-relaxed font-poppins font-medium">
        Discover the pure beauty of “Natural Essence” — your gateway to authentic,
        nature-inspired experiences. Let this unique collection elevate your senses
        and connect you with the unrefined essence of nature.
      </Text>

      <View className="flex-row gap-[16px] items-center mb-[24px]">
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

      {/* ❤️ Heart icon button */}
      <View className="flex-col space-x-3">
        <TouchableOpacity className="flex-1 flex-row justify-center items-center gap-2 px-4 py-3 border border-gray-300 rounded-full mb-[20px]">
          <Ionicons name="heart-outline" size={20} color="black" />
          <Text className="text-gray-700 font-medium font-poppins">Save to Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 px-4 py-3 bg-amber-500 rounded-full items-center"  onPress={() => setShowSetup(true)}>
          <Text className="text-white font-medium font-poppins">Set to Wallpaper</Text>
        </TouchableOpacity>
        <WallpaperSetupModal visible={showSetup} onClose={() => setShowSetup(false)} />
      </View>
    </ScrollView>
  );

  if (isInline) return content;

  return (
 <Modal visible={visible} animationType="slide" transparent>
  <View className="flex-1 bg-black/70 justify-center items-center">
    <View className="w-[92%] h-[90%] bg-white rounded-3xl p-[40px] relative">
      {/* Close button positioned at the top-right */}
      <TouchableOpacity
        onPress={onClose}
        className="absolute top-4 right-4 z-10"
      >
        <Image
          source={require("../assets/images/close.png")}
          style={{ width: 36, height: 36, resizeMode: "contain" }}
        />
      </TouchableOpacity>
      

      {content}
    </View>
  </View>
</Modal>

  );
};

export default PreviewModal;
