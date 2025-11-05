 
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  type ImageSourcePropType,
} from "react-native";

import PreviewModal from "@/components/PreviewModal";
import PreviewSection from "@/components/PreviewSection";
import WallpaperCard from "@/components/WallpaperCard";
import { Ionicons } from "@expo/vector-icons";

// ✅ Wallpaper type
type Wallpaper = {
  id: number;
  name: string;
  tags: string;
  image: ImageSourcePropType;
};

// ✅ Wallpaper data
const wallpapers: Wallpaper[] = [
  {
    id: 1,
    name: "Nature 1",
    tags: "Nature",
    image: require("@/assets/images/nature1.jpg"),
  },
  {
    id: 2,
    name: "Nature 2",
    tags: "Nature",
    image: require("@/assets/images/nature2.jpg"),
  },
  {
    id: 3,
    name: "Nature 3",
    tags: "Nature",
    image: require("@/assets/images/nature3.jpg"),
  },
  {
    id: 4,
    name: "Nature 4",
    tags: "Nature",
    image: require("@/assets/images/nature4.jpg"),
  },
];

export default function WallpaperDetails() {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState<Wallpaper | null>(null);

  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  const renderDesktopLayout = () => (
    <ScrollView
      className="px-[47px]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: "row",
        gap: 24,
        padding: 32,
        alignItems: "flex-start",
      }}
    >
      <View className="w-1/2 rounded-3xl">
        <Header title="Nature" />

        <View className="px-6 py-6">
          <View className="flex-row flex-wrap justify-between gap-y-5">
            {wallpapers.map((item) => (
              <View key={item.id} className="w-[31%]">
                <WallpaperCard data={item} onPress={() => setSelected(item)} />
              </View>
            ))}
          </View>
        </View>
      </View>

      <View className="w-1/2 bg-white rounded-3xl">
        <View className="flex-1 items-center justify-center p-6">
          <PreviewSection />
        </View>
      </View>
    </ScrollView>
  );

  const renderTabletLayout = () => (
    <ScrollView
      className="px-[47px]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: "column",
        gap: 24,
        paddingVertical: 32,
      }}
    >
      <View className="rounded-3xl">
        <Header title="Nature" />

        <View className="px-6 py-6">
          <View className="flex-row flex-wrap justify-between gap-y-5">
            {wallpapers.map((item) => (
              <View key={item.id} className="w-[48%]">
                <WallpaperCard data={item} onPress={() => setSelected(item)} />
              </View>
            ))}
          </View>
        </View>
      </View>

      <View className="bg-white rounded-3xl shadow-sm p-6">
        <PreviewSection />
      </View>
    </ScrollView>
  );

  const renderMobileLayout = () => (
    <View className="flex-1">
      <Header title="Nature" />

      <ScrollView
        className="flex-1 px-6 py-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap justify-between gap-y-5">
          {wallpapers.map((item) => (
            <View key={item.id} className="w-[48%]">
              <WallpaperCard data={item} onPress={() => setSelected(item)} />
            </View>
          ))}
        </View>
      </ScrollView>

      <PreviewModal
        visible={!!selected}
        item={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );

  return (
    <View className="flex-1 bg-[#fafafa]">
      {isDesktop
        ? renderDesktopLayout()
        : isTablet
        ? renderTabletLayout()
        : renderMobileLayout()}
    </View>
  );
}

// --------------------------------
// ✅ Updated Header Component
// --------------------------------
const Header = ({ title }: { title: string }) => {
  const { width } = useWindowDimensions();
  const router = useRouter();

  // ✅ Adjust these values easily
  const fontSize =
    width >= 1024
      ? 50 // Desktop
      : width >= 768
      ? 44 // Tablet
      : 36; // Mobile

  const textColor = "black"; // darker blue-gray (you can change it)

  return (
    <View className="px-6 pt-[43px] lg:pt-0">
      {/* Back to Categories */}
      <TouchableOpacity
        onPress={() => router.push("/")}
        className="flex-row items-center mb-[50px]"
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={22} color={textColor} />
        <Text
          style={{ color:"#979797", fontSize: 16 }}
          className="ml-2 font-poppins"
        >
          Back to Categories
        </Text>
      </TouchableOpacity>

      {/* Header Title */}
      <View className="flex-row justify-between items-center">
        <Text
          allowFontScaling={false}
          style={{
            fontSize,
            color: textColor,
            
          }}
          className="ClashDisplay_Regular"
        >
          {title}
        </Text>

        <View className="flex-row gap-[8px]">
          <Image
            source={require("@/assets/images/row2.png")}
            resizeMode="contain"
            style={{ width: 38.4, height: 40, borderRadius: 12 }}
          />
          <Image
            source={require("@/assets/images/row.png")}
            resizeMode="contain"
            style={{ width: 38.4, height: 40, borderRadius: 12 }}
          />
        </View>
      </View>
    </View>
  );
}; 
 