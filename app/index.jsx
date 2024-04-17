import {SafeAreaView, ScrollView, View} from "react-native";
import { images } from "../constants";
import { Image } from "react-native";


function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="h-full justify-center items-center px-4">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />

                    <Image
                        source={images.cards}
                        className="max-w--[380px] w-full h-[300px]"
                        resizeMode="contain"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default App;