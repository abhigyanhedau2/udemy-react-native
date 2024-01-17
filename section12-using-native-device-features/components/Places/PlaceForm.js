import { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { Place } from "../../models/place";

export default function PlaceForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [selectImage, setSelectImage] = useState(null)
    const [pickedLocation, setPickedLocation] = useState(null);

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText);
    }

    function takeImageHandler(imageURI) {
        setSelectImage(imageURI);
    }

    function pickLocationHandler(location) {
        setPickedLocation(location);
    }

    function savePlaceHandler() {
        const placeData = new Place(enteredTitle, selectImage, "My Location", pickedLocation);
        props.onCreatePlace(placeData);
    }

    return <ScrollView style={styles.form}>
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle} />
        </View>
        <ImagePicker onTakeImage={takeImageHandler} />
        <LocationPicker onPickLocation={pickLocationHandler} />
        <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        fontWeight: "bold",
        marginBottom: 4,
        color: Colors.primary500
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    },
});