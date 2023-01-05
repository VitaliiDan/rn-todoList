import {StyleSheet, Text, View, FlatList} from "react-native";
import {SingleGoal} from "./SingleGoal";

export const ListOfGoals = ({goalList, delGoalHandler}) => {
    const isGoalListNotEmpty = goalList.length !== 0;

    return (
        <View style={styles.container}>
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
    }
})