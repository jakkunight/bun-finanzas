import { Text, View } from "react-native";

export const Error = () => (
	<View className="w-full h-full flex justify-center items-center" >
		<Text className="text-lg text-red-600" >[ERROR] Something went wrong.</Text>
	</View>
);
