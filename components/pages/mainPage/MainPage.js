import {useState} from "react";
import {Button} from "react-native";
import {AppInput} from "../../shared/AppInput";
import {ListOfGoals} from "./ListOfGoals";


export const MainPage = ({goalList, delGoalHandler, addGoalHandler}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalToggle = () => setIsModalOpen(prev => !prev);


    return (
        <>
            <Button title='Add goal' onPress={modalToggle}/>
            <AppInput
                addGoalHandler={addGoalHandler}
                isModalOpen={isModalOpen}
                modalToggle={modalToggle}
            />
            <ListOfGoals
                goalList={goalList}
                delGoalHandler={delGoalHandler}
            />
        </>
    )
}