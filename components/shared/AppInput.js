import {useState} from "react";
import {StyleSheet, Button, TextInput, View, Modal} from "react-native";

export const AppInput = ({addGoalHandler, isModalOpen, modalToggle}) => {
    const [goal, setGoal] = useState('');

    const addGoal = () => {
        if (goal.trim().length !== 0) {
            addGoalHandler(goal);
            setGoal('');
            modalToggle();
        }
    }

    return (
        <Modal visible={isModalOpen} animationType='slide'>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputWrapper_input}
                    placeholder={'Your course goal!'}
                    onChangeText={setGoal}
                    value={goal}
                />
                <Button title={'Add goal'} onPress={addGoal}/>
            </View>
            <View>
                <Button title={'Close modal'} color={'red'} onPress={modalToggle}/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'coral',
    },
    inputWrapper_input: {
        width: '60%',
        flexGrow: 1,
        paddingLeft: 8,
        paddingRight: 8,
        marginRight: 8,
        borderWidth: 1,
        borderColor: 'black',
    }
})