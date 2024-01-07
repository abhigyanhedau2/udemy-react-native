import { View, Text } from "react-native"

export default function GameOver(props) {
    return <View>
        <Text>Game is Over!</Text>
        <Text>{`It took a total of ${props.rounds} to guess your number.`}</Text>
    </View>
}