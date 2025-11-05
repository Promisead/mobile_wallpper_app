import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const navItems = [
  { name: "Home", path: "/" as const, icon: "home-outline" },
  { name: "Browse", path: "/browse" as const, icon: "grid-outline" },
  { name: "Favourites", path: "/favourites" as const, icon: "heart-outline" },
  { name: "Settings", path: "/settings" as const, icon: "settings-outline" },
];

export default function Sidebar() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const screenWidth = Dimensions.get("window").width;
  const slideAnim = useRef(new Animated.Value(screenWidth)).current;

  const toggleSidebar = () => {
    const toValue = open ? screenWidth : 0;
    setOpen(!open);
    Animated.timing(slideAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleNavPress = () => {
    setOpen(false);
    Animated.timing(slideAnim, {
      toValue: screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  if (isDesktop) return null;
const router = useRouter()
  return (
    <>
      {/* Header */}
      <View className="flex-row items-center justify-between bg-white px-[20px] border-b border-gray-200 z-20 py-[38.5px]">
        <TouchableOpacity onPress={()=> router.push("/")} className="flex-row items-center gap-[8px]">
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text className="text-[14px] font-normal font-poppins">
            Wallpaper Studio
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleSidebar}>
          <Ionicons name="menu" size={33} color="black" />
        </TouchableOpacity>
      </View>

      {/* Sidebar + Overlay */}
      {open && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
          }}
        >
          {/* Overlay */}
          <Pressable
            onPress={toggleSidebar}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          />

          {/* Drawer */}
          <Animated.View
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: "80%",
              backgroundColor: "white",
              transform: [
                {
                  translateX: slideAnim.interpolate({
                    inputRange: [0, screenWidth],
                    outputRange: [0, screenWidth],
                  }),
                },
              ],
              zIndex: 50,
              shadowColor: "#000",
              shadowOpacity: 0.3,
              shadowRadius: 10,
            }}
          >
            <View className="mt-16 px-[20px]">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} asChild>
                  <TouchableOpacity
                    onPress={handleNavPress}
                    className={`flex-row items-center py-[19.5px] border-b border-gray-200 px-[16px] gap-[10px] ${
                      pathname === item.path ? "bg-gray-100 rounded-lg" : ""
                    }`}
                  >
                    <Ionicons name={item.icon as any} size={25} color="black" />
                    <Text className="text-[14px] font-normal font-poppins">
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </Link>
              ))}
            </View>
          </Animated.View>
        </View>
      )}
    </>
  );
}
