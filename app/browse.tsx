import CategoryGrid from '@/components/CategoryGrid';
import GradientText from '@/components/GradientText';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 px-4 lg:px-[47px] bg-white">
      <View className="mt-[30px] lg:mt-8">
        <GradientText
          text="Browse Categories"
          className="text-[24px] lg:text-[60px] font-[ClashDisplay_Bold] "
        />

        <Text className="text-[#575757] mt-2 text-[16px] lg:text-[24px] w-[348px] lg:w-[870px] font-normal font-poppins">
          Explore our curated collections of stunning wallpapers
        </Text>
      </View>

      <View className="mt-8 flex-row justify-between items-center">
        <Text className="text-xl font-bold">Categories</Text>
        <Text className="text-gray-500">See All</Text>
      </View>

      <CategoryGrid />
    </ScrollView>
  );
}
