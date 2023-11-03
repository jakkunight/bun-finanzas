import { StatusBar } from "expo-status-bar";
import { setVisibilityAsync } from "expo-navigation-bar";
import { View } from "react-native";
import HomePage from "./index";
import { useEffect } from "react";


const App = () => {
	setVisibilityAsync("hidden");

	// Installation setup

	useEffect(() => { }, []);

	return (
		<View className="bg-black min-h-full w-full overflow-y-auto flex justify-center items-center" >
			<StatusBar hidden={true} ></StatusBar>
			<HomePage />
		</View>
	);
};

export default App;