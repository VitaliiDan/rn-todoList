import {StyleSheet, Text, View} from "react-native";

export const Footer = ({onPress}) => {

    return (
        <View style={styles.footer}>
            <Text style={styles.title} onPress={onPress}>by VDan</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        height: 50,
        backgroundColor: 'coral',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

