import {AppInput} from "../../shared/AppInput";
import {ListOfGoals} from "./ListOfGoals";


export const MainPage = ({goalList, delGoalHandler, addGoalHandler}) => {
    return (
        <>
            <AppInput
                addGoalHandler={addGoalHandler}
            />
            <ListOfGoals
                goalList={goalList}
                delGoalHandler={delGoalHandler}
            />
        </>
    )
}