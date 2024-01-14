import { View, StyleSheet, TextInput, Text } from 'react-native'
import { GlobalStyles } from '../../constants/styles';

export default function Input(props) {
    const inputStyles = [
        styles.textInput,
        // add multiline styles if multiline prop is true
        props.textInputConfig && props.textInputConfig.multiline && styles.inputMultiline
    ];

    if (props.invalid) inputStyles.push(styles.invalidInput);

    return <View style={[styles.container, props.style]}>
        <Text style={[styles.label, props.invalid && styles.invalidLabel]}>{props.label}</Text>
        <TextInput style={inputStyles} {...props.textInputConfig} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    textInput: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: "top"
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50
    },
});