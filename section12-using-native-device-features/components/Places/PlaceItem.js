import { View, Text, Image, Pressable, StyleSheet } from "react-native";

export default function PlaceItem(props) {
    return <Pressable onPress={props.onSelect}>
        <View>
            <Image source={{ uri: props.place.imageURI }} />
            <View>
                <Text>{props.place.title}</Text>
                <Text>{props.place.address}</Text>
            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({});