import {StyleSheet, View, Text, Image, TouchableHighlight} from "react-native";
import basketImage from '../../../assets/basket.png';

export const SingleGoal = ({singleGoal, delGoalHandler}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{singleGoal.text}</Text>
            <TouchableHighlight onPress={() => delGoalHandler(singleGoal.id)}>
                <Image source={basketImage} style={styles.image}/>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'coral',
        paddingVertical: 8,
    },
    title: {
        fontSize: 16,
    },
    delButton: {
        width: 19,
        height: 25,
    }
});