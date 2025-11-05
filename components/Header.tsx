import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname, useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";

const navItems: { name: string; path: "/" | "/browse" | "/favourites" | "/settings"; icon: string; }[] = [
  { name: "Home", path: "/", icon: "home-outline" },
  { name: "Browse", path: "/browse", icon: "grid-outline" },
  { name: "Favourites", path: "/favourites", icon: "heart-outline" },
  { name: "Settings", path: "/settings", icon: "settings-outline" },
];

export default function Header() {
  const router = useRouter()
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  if (!isDesktop) return null; // hide on mobile

  return (
    <View className="flex-row items-center justify-between  px-[20px] lg:px-[47px]  py-[38.5px] border-b border-gray-300 bg-white ">
      {/* Logo section */}
      <TouchableOpacity onPress={()=> router.push("/")} className="flex-row items-center gap-[3.5px]">
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text className="text-[14px] font-poppins">Wallpaper Studio</Text>
      </TouchableOpacity>

      {/* Navigation links */}
      <View className="flex-row space-x-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link key={item.path} href={item.path} asChild>
              <TouchableOpacity
                className={`flex-row items-center space-x-1 px-3 py-2 rounded-xl border 
                  ${
                    isActive
                      ? "bg-gray-100 border-gray-300"
                      : "border-transparent"
                  }`}
              >
                <Ionicons
                  name={item.icon as any}
                  size={20}
                  color={isActive ? "black" : "gray"}
                />
                <Text
                  className={`font-medium ${
                    isActive ? "text-black" : "text-gray-500"
                  }`}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            </Link>
          );
        })}
      </View>
    </View>
  );
}
