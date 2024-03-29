import { View, StyleSheet, Alert, Image, Text } from "react-native"
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker"
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

export default function ImagePicker(props) {
    const [pickedImage, setPickedImage] = useState(null);

    // For iOS - Check or request permissions to access the camera. This uses both requestCameraPermissionsAsync 
    // and getCameraPermissionsAsync to interact with the permissions.
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            // permissionResponse.granted = true if permission is granted, false otherwise
            return permissionResponse.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficient Permissions", "You need to grant camera permissions to use this app.");
            return false;
        }

        return true;
    }

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) return;

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspectRatio: [16, 9],
            quality: 0.5
        });

        setPickedImage(image.assets[0].uri);
        props.onTakeImage(image.assets[0].uri);
    }

    let imagePreview = <Text>No image taken yet.</Text>;

    if (pickedImage) imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;

    return <View>
        <View style={styles.imagePreview}>{imagePreview}</View>
        <OutlinedButton icon="camera" title="Take Image" onPress={takeImageHandler}>Take Image</OutlinedButton>
    </View>
}

const styles = StyleSheet.create({
    imagePreview: {
        width: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image: {
        width: "100%",
        height: "100%"
    }
});