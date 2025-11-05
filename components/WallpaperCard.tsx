import { Ionicons } from "@expo/vector-icons";
import type { FC } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  type ImageSourcePropType,
} from "react-native";

type Wallpaper = {
  id: number;
  name: string;
  tags: string;
  image: ImageSourcePropType;
};

type WallpaperCardProps = {
  data: Wallpaper;
  onPress?: () => void;
};

const WallpaperCard: FC<WallpaperCardProps> = ({ data, onPress }) => {
  return (
    <View className="">
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className="relative rounded-3xl overflow-hidden bg-gray-100 "
      style={{ height: 290.71,     }}  
    >
      <Image
        source={data.image}
        style={{ height: 290.71,   }}  
        className="rounded-3xl"
        resizeMode="cover"
      />

      {/* Heart icon */}
       <TouchableOpacity className="absolute top-2 right-2 bg-white p-2 rounded-full">
                <Ionicons name="heart" size={18} color="#ffb703" />
              </TouchableOpacity>

      {/* Bottom text */}
      <View className="absolute bottom-4 left-3">
        <Text className="text-white text-[24px] font-poppins">{data.name}</Text>
        <View className="bg-white/10 px-[12px] py-1 mt-1 rounded-full self-start border border-white/20">
          <Text className="text-white text-[14px] font-poppins">{data.tags}</Text>
        </View>
      </View>
    </TouchableOpacity>

    </View>
  );
};

export default WallpaperCard;
