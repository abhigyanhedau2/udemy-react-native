import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

export default function MealItem(props) {
    const navigate = useNavigation();

    function mealItemClickHandler() {
        navigate.navigate("MealDetail", {
            mealId: props.id
        });
    }

    return <View style={styles.mealItem}>
        <Pressable
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => (pressed ? styles.pressablePressed : null)}
            onPress={mealItemClickHandler}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.image} source={{ uri: props.imageUrl }} />
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                <MealDetails duration={props.duration} complexity={props.complexity} affordability={props.affordability} />
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        // android
        elevation: 4,
        // ios
        backgroundColor: "white", // need to add this line of code for shadow to be in action
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.select({
            android: "hidden"
        })
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    pressablePressed: {
        opacity: Platform.select({
            ios: 0.75
        })
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        margin: 8
    }
});