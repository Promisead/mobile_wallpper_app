import { ImageSourcePropType, View } from "react-native";
import CategoryCard from "./CategoryCard";

export interface Category {
  id: string;           // ✅ add this
  title: string;
  desc: string;
  wallpapers: number;
  image: ImageSourcePropType;
}

const categories: Category[] = [
  {
    id: "1",
    title: "Nature",
    desc: "Mountains, Forest and Landscapes",
    wallpapers: 3,
    image: require("@/assets/images/nature.jpg"),
  },
  {
    id: "2",
    title: "Abstract",
    desc: "Modern Geometric and artistic designs",
    wallpapers: 4,
    
    image: require("@/assets/images/abstract.jpg"),
  },
  {
    id: "3",
    title: "Urban",
    desc: "Cities, architecture and street",
    wallpapers: 6,
   image: require("@/assets/images/urban.jpg"),
  },
  {
    id: "4",
    title: "Space",
    desc: "Cosmos, planets, and galaxies",
    wallpapers: 3,
    image: require("@/assets/images/space.jpg"),
  },
  {
    id: "5",
    title: "Minimalist",
    desc: "Clean, simple, and elegant",
    wallpapers: 6,
    image: require("@/assets/images/minimalist.jpg"),
  },
  {
    id: "6",
    title: "Animals",
    desc: "Wildlife and nature photography",
    wallpapers: 4,
    image: require("@/assets/images/animal.jpg"),
  },
];

 

export default function CategoryGrid() {
  return (
    <View className="flex flex-wrap flex-row justify-between mt-4">
      {categories.map((item) => (
        <CategoryCard key={item.id} category={item} />
      ))}
    </View>
  );
}
