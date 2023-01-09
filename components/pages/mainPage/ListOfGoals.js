import {StyleSheet, Text, View, FlatList} from "react-native";
import {SingleGoal} from "./SingleGoal";

export const ListOfGoals = ({goalList, delGoalHandler}) => {
    const isGoalListNotEmpty = goalList.length !== 0;

    return (
        <View style={styles.container}>
            {/*<Pressable*/}
            {/*    android_ripple={{color: 'black'}}*/}
            {/*    onPress={() => console.log('Pressed!')}*/}
            {/*    style={({pressed}) => pressed ? styles.pressedItem : styles.notPressedItem}*/}
            {/*>*/}
            {/*    <Text style={styles.text}>Press me!</Text>*/}
            {/*</Pressable>*/}
            <Text style={styles.listTitle}>List of Goals:</Text>
            <FlatList
                data={goalList}

                renderItem={
                    itemData => <SingleGoal
                        singleGoal={itemData.item}
                        delGoalHandler={delGoalHandler}/>
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        padding: 16,
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        padding: 8,
    },
    notPressedItem:{
        backgroundColor: 'lightblue',
        borderRadius: 8,
    },
    pressedItem: {
        opacity: 0.5,
        borderRadius: 8,
    },

})