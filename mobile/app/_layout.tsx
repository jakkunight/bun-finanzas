import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { ScrollView } from "react-native";

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="p-4 flex-1 bg-neutral-300 dark:bg-black ">
        <ScrollView >
          <Slot />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
