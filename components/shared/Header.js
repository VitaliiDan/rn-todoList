import {StyleSheet, Text, View} from "react-native";

export const Header = () => {
    return (
        <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 75,
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: 'coral',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})