import { Image, ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { Platform, Pressable, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require("../assets/images/First.jpg")}
        style={{ width: "100%", height: "100%" }}>
        <View className="flex-1 justify-between mb-2">
          <Text className="text-white text-[48px] w-[317px] text-center mt-[108px]">Find and rent car in easy steps.</Text>
          <Pressable className="bg-[#FF5C00] w-[317px] h-[56px] rounded-[16px] justify-center ml-[36px]" onPress={() => router.push("/screens/auth/signin")}>
            <Text className="text-white text-[18px] font-bold text-center">Let's Go</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}