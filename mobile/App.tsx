import { StatusBar } from "expo-status-bar";
import { setVisibilityAsync } from "expo-navigation-bar";
import { View, Text, TouchableOpacity } from "react-native";

const App = () => {
	setVisibilityAsync("hidden");
	return (
		<View className="bg-black min-h-full w-full overflow-y-auto flex justify-center items-center" >
			<StatusBar hidden={true} ></StatusBar>
			<Text className="text-lg text-slate-300" >Hola Mundo!</Text>
			<TouchableOpacity>
				<Text className="text-md text-blue-700">Go to Fontaine!</Text>
			</TouchableOpacity>
		</View>
	);
};

export default App;